import type { NextApiHandler } from "next"
import Nylas from "nylas"

Nylas.config({
  clientId: process.env.NEXT_PUBLIC_NYLAS_CLIENT_ID as string,
  clientSecret: process.env.NYLAS_CLIENT_SECRET as string,
})

const unlink: NextApiHandler<any | Error> = async (req, res) => {
  if (req.method !== "DELETE") {
    res.status(400).json(new Error("Incorrect method."))
    return
  }

  const { accountId } = req.query
  if (!accountId) {
    res.status(400).json(new Error("accountId is missing from the endpoint."))
    return
  }

  const accessToken = req.headers.authorization
  if (!accessToken) {
    res.status(401).json(new Error("No access token provided."))
    return
  }

  try {
    // Delete the account from Nylas
    const unlinkPromise = Nylas.accounts.delete(accountId as string)

    // Delete the account record from the database
    const deletePromise = fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`, {
      method: "POST",
      body: JSON.stringify({
        query: `
          mutation DeleteCalendarAccount($id: String!) {
            delete_calendars(where: {id: {_eq: $id}}) {
              affected_rows
            }
          }
        `,
        variables: {
          id: accountId,
        },
      }),
      headers: {
        authorization: accessToken,
      },
    })

    const responses = await Promise.all([deletePromise, unlinkPromise])

    const data = responses[0].json()
    res.status(200).json(data)
  } catch (error: any) {
    res.status(error.statusCode).json(error)
    return
  }
}

export default unlink

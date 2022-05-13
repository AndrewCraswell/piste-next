import type { NextApiHandler } from "next"
import Stripe from "stripe"
import Nylas from "nylas"
import { UpdateStudentByIdDocument } from "$queries"

Nylas.config({
  clientId: process.env.NEXT_PUBLIC_NYLAS_CLIENT_ID as string,
  clientSecret: process.env.NYLAS_CLIENT_SECRET as string,
})

const connect: NextApiHandler<string | Error> = async (req, res) => {
  if (req.query.error) {
    res.status(400).send(`Login error: ${req.query["error"]}`)
    return
  }

  const userId = req.query.state
  if (!userId) {
    res.status(400).json(new Error("UserId is missing from state param."))
    return
  }

  if (req.query.code) {
    try {
      const token = await Nylas.exchangeCodeForToken(req.query.code as string)
      const result = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`, {
        method: "POST",
        body: JSON.stringify({
          query: `
            mutation UpdateStudentById($id: String!, $changes: Accounts_set_input!) {
              update_Accounts_by_pk(pk_columns: { Oid: $id }, _set: $changes) {
                Oid
                SchedulerToken
              }
            }
          `,
          variables: {
            id: userId,
            changes: {
              SchedulerToken: token.accessToken,
            },
          },
        }),
        headers: {
          "x-hasura-admin-secret": process.env
            .HASURA_GRAPHQL_ADMIN_SECRET as string,
        },
      })
    } catch (error: any) {
      res.status(error.statusCode).json(error)
      return
    }
  } else {
    res.status(424).json(new Error("Code was not given."))
    return
  }

  res.redirect("/profile?tab=connections")
}

export default connect

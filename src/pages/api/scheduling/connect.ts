import { getBaseUrl } from "$lib"
import type { NextApiHandler } from "next"
import Nylas from "nylas"

Nylas.config({
  clientId: process.env.NEXT_PUBLIC_NYLAS_CLIENT_ID as string,
  clientSecret: process.env.NYLAS_CLIENT_SECRET as string,
})

const connect: NextApiHandler<string | Error> = async (req, res) => {
  if (req.method === "GET") {
    const userId = req.query.userId as string | undefined
    if (!userId) {
      res.status(400).json(new Error("UserId is missing."))
      return
    }

    const loginHref = Nylas.urlForAuthentication({
      redirectURI: `${getBaseUrl()}/api/scheduling/callback/`,
      loginHint: req.query.login_hint as string | undefined,
      scopes: ["calendar"],
      state: userId,
    })

    res.redirect(loginHref)
    return
  } else {
    res.status(400).json(new Error("Incorrect method."))
  }

  try {
    res.status(200).json({} as any)
  } catch (error: any) {
    res.status(error.statusCode).json(error)
  }
}

export default connect

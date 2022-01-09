import type { NextApiHandler } from "next"
import Stripe from "stripe"

// Sample: https://github.com/stripe-samples/connect-onboarding-for-standard/blob/master/server/node/server.js
// accountId = TODO

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: process.env.NEXT_PUBLIC_SITE_NAME!,
  },
})

// Create or use an existing Customer to associate with the SetupIntent.
// The PaymentMethod will be stored to this Customer for later use.
const setupIntent: NextApiHandler<Stripe.SetupIntent | Error> = async (
  req,
  res
) => {
  const { accountId } = req.query

  if (!accountId) {
    res.status(400).json(new Error("No customerId was provided."))
  }

  if (typeof accountId === "string") {
    try {
      // const setupIntent = await stripe.setupIntents.create({
      //   customer: customerId,
      // })

      res.status(200).json({} as any)
    } catch (error: any) {
      res.status(error.statusCode).json(error)
    }
  } else {
    res.status(400).json(new Error("accountId must be a string."))
  }
}

export default setupIntent

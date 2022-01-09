import type { NextApiHandler } from "next"
import Stripe from "stripe"

// Sample: https://github.com/stripe-samples/developer-office-hours/blob/master/2020-12-15-clone-payment-method/client/index.html
// Video: https://www.youtube.com/watch?v=ri07uPos1gs

// customerId = cus_Kvm41gHVgqbeeS

// TODO: Delete payment method
//    Reference: https://stripe.com/docs/api/cards/delete

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: process.env.NEXT_PUBLIC_SITE_NAME!,
  },
})

const getPaymentMethods: NextApiHandler<
  Stripe.PaymentMethod[] | Error
> = async (req, res) => {
  const { customerId } = req.query

  if (!customerId) {
    res.status(400).json(new Error("No customerId was provided."))
  }

  if (typeof customerId === "string") {
    try {
      const paymentMethods = await stripe.customers.listPaymentMethods(
        customerId,
        {
          type: "card",
        }
      )

      res.status(200).json(paymentMethods.data)
    } catch (error: any) {
      res.status(error.statusCode).json(error)
    }
  } else {
    res.status(400).json(new Error("customerId must be a string."))
  }
}

export default getPaymentMethods

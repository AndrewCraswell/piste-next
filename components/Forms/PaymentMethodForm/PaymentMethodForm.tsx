import { loadStripe } from "@stripe/stripe-js"
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js"
import { FormEvent } from "react"
import { PrimaryButton } from "@fluentui/react"

// Sample code:
// https://github.com/stripe-samples/saving-card-without-payment/blob/14749ed3cf830ba307924092b9ca3e0d4ae726ef/client/script.js

export interface IPaymentMethodFormProps {}

const stripePromise = loadStripe(
  //"pk_test_51Jyr98IdrFHHtGoGwIGJkd5OLVshsJT0sgV3BREw0aMyPthBV1TiLCWOTKr666HeSs1Y8yBgvVphoweVp9XxnVzN00bY4jDgw6"
  "pk_live_51Jyr98IdrFHHtGoGIVzQUqX04KyrZIB8dacM56ARIMtRqAMqUIKvL3ZHF7P9ujeNnPYaCSpNSByliUei4EtBE9gQ00ubuKijiH"
)

export const ElementsProvider: React.FunctionComponent = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>
}

export const PaymentMethodForm: React.FunctionComponent<
  IPaymentMethodFormProps
> = (props) => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return null
    }

    // Make sure the card element exists
    const card = elements.getElement(CardElement)
    if (!card) {
      return null
    }

    // Validate the payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    })

    if (error) {
      console.log("[PaymentMethod] Method could not be created.")
    } else {
      console.log("[PaymentMethod]", paymentMethod)

      // Create the SetupIntent
      const setupIntentResponse = await fetch("/api/setup-intent", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      })

      const setupIntent = await setupIntentResponse.json()
      console.log("[SetupIntent]", setupIntent)

      // Attach the payment method to the customer
      if (setupIntent.client_secret) {
        const intentResult = await stripe.confirmCardSetup(
          setupIntent.client_secret,
          {
            payment_method: {
              card,
              billing_details: {
                name: "Andrew Craswell",
                email: "ajcraswell@gmail.com",
              },
            },
          }
        )

        console.log("[IntentResult]", intentResult) // Save this to the Account paymentMethods?
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: 300 }}>
      <CardElement />
      <PrimaryButton type="submit" disabled={!stripe} style={{ marginTop: 16 }}>
        Add payment method
      </PrimaryButton>
    </form>
  )
}

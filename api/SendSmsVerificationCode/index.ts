import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Twilio } from "twilio"

const client = new Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const message = await client.messages.create({
      body: "Your appointment is coming up on July 21 at 3PM",
      messagingServiceSid: process.env.TWILIO_MESSAGER_ACCOUNT_ID,
      to: "+14252602501",
    })

    context.log(message)
  } catch (error) {
    context.log(error)
  }

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {},
  }
}

export default httpTrigger

import { AzureFunction, Context, HttpRequest } from "@azure/functions"
const sql = require("mssql")

let pool = undefined

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  if (!pool?._connected) {
    pool = await sql.connect(process.env.PISTE_DB_CONNECTION_STRING)
  }

  const query = `
        SELECT COUNT (*) AS Count
        FROM dbo.AssociationMembers
    `

  const result = await sql.query(query)

  context.res = {
    body: result,
  }
}

export default httpTrigger

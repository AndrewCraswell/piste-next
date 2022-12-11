import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import axios from "axios"
import jwtDecode from "jwt-decode"

const configuration = {
  HASURA_GRAPHQL_ADMIN_SECRET: "xxx",
  HASURA_GRAPHQL_API_URL: "https://staging.fencing.club/graphql/",
}

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log(req.headers)
  if (!req.headers.authorization) {
    context.res = {
      status: 200,
      body: { "x-hasura-role": "anonymous" },
    }
  } else {
    const bearerToken = extractToken(req.headers.authorization)
    context.log(req.headers.authorization)
    context.log(bearerToken)
    const token = (await jwtDecode(bearerToken)) as any
    context.log(token)
    const userId = token?.oid
    context.log(userId)

    const query = `
    query GetAccountAppRoles($userId: String!) {
      Accounts_by_pk(Oid: $userId) {
        AccountAppRoles {
          AppRole {
            Name
          }
        }
      }
    }
  `

    try {
      const {
        data: { data },
      } = await axios({
        url: configuration.HASURA_GRAPHQL_API_URL,
        method: "post",
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret": configuration.HASURA_GRAPHQL_ADMIN_SECRET,
        },
        data: {
          query,
          variables: {
            userId,
          },
        },
      })

      let defaultRole = "user"
      let roles = [defaultRole]

      // If user is an existing user
      if (data?.Accounts_by_pk?.AccountAppRoles) {
        const userRoles = data.Accounts_by_pk.AccountAppRoles.map(
          (r) => r.AppRole.Name
        )
        roles = [...roles, ...userRoles]
      }

      const body = {
        "x-hasura-default-role": defaultRole,
        "x-hasura-allowed-roles": `{${roles.join(",")}}`,
        //"x-hasura-role": defaultRole,
        "x-hasura-user-id": userId,
      }

      context.res = {
        status: 200,
        body,
      }
    } catch (error) {
      context.res = {
        status: 500,
        body: {
          error,
        },
      }
    }
  }
}

export default httpTrigger

const extractToken = (bearerToken) => {
  const regex = /^(Bearer) (.*)$/g
  const match = regex.exec(bearerToken)
  if (match && match[2]) {
    return match[2]
  }
  return null
}

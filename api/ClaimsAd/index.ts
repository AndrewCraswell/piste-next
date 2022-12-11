import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import axios from "axios"

const configuration = {
  HASURA_GRAPHQL_ADMIN_SECRET: "xxx",
  HASURA_GRAPHQL_API_URL: "https://staging.fencing.club/graphql/",
}

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const userId = req.body.objectId

  // query GetAccountClubRoles($userId: String!) {
  //   Accounts_by_pk(Oid: $userId) {
  //     AccountClubRoles {
  //       ClubRole {
  //         Name
  //       }
  //       ClubId
  //       ClubRoleId
  //     }
  //   }
  // }

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

    const claims = {
      "x-hasura-default-role": defaultRole,
      "x-hasura-allowed-roles": roles,
      "x-hasura-user-id": userId,
    }

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: {
        version: "1.0.0",
        action: "Continue",
        extension_hasuraClaims: JSON.stringify(claims),
      },
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

export default httpTrigger

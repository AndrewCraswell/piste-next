import { BaseQueryApi } from "@reduxjs/toolkit/dist/query/baseQueryTypes"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const backendApi = createApi({
  reducerPath: "backend",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
    prepareHeaders: getAuthorizationHeaders,
  }),
  endpoints: (builder) => ({
    deleteCalendar: builder.query<any, { accountId: string }>({
      query: ({ accountId }) => ({
        url: `scheduling/unlink/${accountId}/`,
        method: "DELETE",
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useDeleteCalendarQuery, useLazyDeleteCalendarQuery } = backendApi

function getAuthorizationHeaders(
  headers: Headers,
  api: Pick<BaseQueryApi, "getState" | "extra" | "endpoint" | "type" | "forced">
) {
  let accessToken = undefined

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.includes(import.meta.env.VITE_AUTH0_HASURA_AUDIENCE || "")) {
      accessToken = JSON.parse(localStorage.getItem(key)!)?.body?.access_token
      break
    }
  }

  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`)
  }

  return headers
}

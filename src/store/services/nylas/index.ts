import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const nylasApi = createApi({
  reducerPath: "nylas",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nylas.com/",
  }),
  endpoints: (builder) => ({
    createComponent: builder.query<any, string>({
      query: (clientId) => ({
        url: `component/${clientId}/`,
        method: "POST",
        body: {
          public_account_id: "4ll3fe0sq5x6pmmlc8s8k9rqs",
          access_token: "EmRJZNmVZSnNH9gAj4EpAooDvflGED",

          active: "true",
          allowed_domains: [
            "http://localhost:3000",
            "https://fencingclub.piste",
          ],
          // hasSharedToken: true,
          name: "Coaching Agenda",
          type: "agenda",
          settings: {
            allow_date_change: false,
            auto_time_box: true,
            calendar_ids: "",
            color_by: "event",
            condensed_view: false,
            header_type: "full",
            hide_current_time: false,
            hide_ticks: false,
            prevent_zoom: false,
            show_as_busy: false,
            theme: "theme-1",
          },
        },
      }),
    }),
    getCalendars: builder.query<any, string>({
      query: (accessToken) => ({
        url: `calendars/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateComponentQuery,
  useLazyCreateComponentQuery,
  useGetCalendarsQuery,
  useLazyGetCalendarsQuery,
} = nylasApi

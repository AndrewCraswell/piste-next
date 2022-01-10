import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { PaymentMethod } from "@stripe/stripe-js"

// Define a service using a base URL and expected endpoints
export const paymentMethodsApi = createApi({
  reducerPath: "paymentMethods",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/payments/" }),
  tagTypes: ["PaymentMethod"],
  endpoints: (builder) => ({
    getPaymentMethods: builder.query<PaymentMethod[], string>({
      query: (customerId) => `methods/${customerId}`,
      providesTags: ["PaymentMethod"],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPaymentMethodsQuery, useLazyGetPaymentMethodsQuery } =
  paymentMethodsApi

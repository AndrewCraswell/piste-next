import { paymentMethodsApi } from "./services"

export const rootReducer = {
  // Add the generated reducer as a specific top-level slice
  [paymentMethodsApi.reducerPath]: paymentMethodsApi.reducer,
}

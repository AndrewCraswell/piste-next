import { paymentMethodsApi, nylasApi, backendApi } from "./services"

export const rootReducer = {
  // Add the generated reducer as a specific top-level slice
  [paymentMethodsApi.reducerPath]: paymentMethodsApi.reducer,
  [nylasApi.reducerPath]: nylasApi.reducer,
  [backendApi.reducerPath]: backendApi.reducer,
}

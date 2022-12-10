import { combineReducers } from "@reduxjs/toolkit"
import { paymentMethodsApi, nylasApi, backendApi } from "./services"

export const rootReducer = combineReducers({
  // Add the generated reducer as a specific top-level slice
  [paymentMethodsApi.reducerPath]: paymentMethodsApi.reducer,
  [nylasApi.reducerPath]: nylasApi.reducer,
  [backendApi.reducerPath]: backendApi.reducer,
})

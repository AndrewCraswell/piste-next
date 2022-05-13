import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { rootReducer } from "./reducers"
import { paymentMethodsApi, nylasApi, backendApi } from "./services"

function configureAppStore(preloadedState: any = {}) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      paymentMethodsApi.middleware,
      nylasApi.middleware,
      backendApi.middleware,
      ...getDefaultMiddleware(),
    ],
    preloadedState,
  })

  //@ts-ignore
  if (process.env.NODE_ENV !== "production" && module.hot) {
    //@ts-ignore
    module.hot.accept("./reducers", () => store.replaceReducer(reducer))
  }

  return store
}

export const store = configureAppStore()

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const getBaseUrl = () => {
  if (typeof window === "undefined") {
    if (
      ["preview", "development"].includes(
        process.env.NEXT_PUBLIC_VERCEL_ENV ?? ""
      )
    ) {
      return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    }
  } else {
    return window.location.origin
  }
}

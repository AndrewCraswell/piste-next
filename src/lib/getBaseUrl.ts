export const getBaseUrl = () => {
  if (typeof window === "undefined") {
    const deployedEnv = process.env.NEXT_PUBLIC_VERCEL_ENV ?? ""

    if (!deployedEnv) {
      return "http://localhost:3000"
    } else if (
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

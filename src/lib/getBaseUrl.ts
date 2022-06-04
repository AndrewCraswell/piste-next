export const getBaseUrl = () => {
  if (typeof window === "undefined") {
    const deployedEnv = import.meta.env.VITE_VERCEL_ENV ?? ""

    if (!deployedEnv) {
      return "http://localhost:3000"
    } else if (
      ["preview", "development"].includes(import.meta.env.VITE_VERCEL_ENV ?? "")
    ) {
      return `https://${import.meta.env.VITE_VERCEL_URL}`
    }
  } else {
    return window.location.origin
  }
}

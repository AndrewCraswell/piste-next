export const getBaseUrl = () => {
  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  if (
    ["preview", "development"].includes(
      process.env.NEXT_PUBLIC_VERCEL_ENV ?? ""
    )
  ) {
    baseUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  return baseUrl
}

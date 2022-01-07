/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/api/graphql",
        destination: process.env.GRAPHQL_API_URL,
      },
    ]
  },
}

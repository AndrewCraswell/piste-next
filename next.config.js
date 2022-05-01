const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE_BUNDLE === "true",
})

module.exports = withBundleAnalyzer(
  /** @type {import('next').NextConfig} */
  {
    reactStrictMode: true,
    trailingSlash: true,
    async rewrites() {
      return [
        {
          source: "/api/graphql/",
          destination: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
        },
      ]
    },
  }
)

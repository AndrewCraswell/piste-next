module.exports = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_GRAPHQL_API_URL]: {
        headers: {
          "X-Hasura-Admin-Secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: ["./src/queries/**/*.graphql"],
  overwrite: true,
  generates: {
    "./src/queries/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactHooksImportFrom: "@apollo/client",
      },
    },
  },
}

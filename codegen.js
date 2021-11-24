module.exports = {
  schema: [
    {
      [process.env.GRAPHQL_API_URL]: {
        headers: {},
      },
    },
  ],
  documents: ["./queries/**/*/.graphql"],
  overwrite: true,
  generates: {
    "./queries/index.ts": {
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
};

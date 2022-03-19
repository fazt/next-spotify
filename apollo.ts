import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-api-fazt.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export { client };

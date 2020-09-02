import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://countries-274616.ew.r.appspot.com/",
  cache: new InMemoryCache(),
});

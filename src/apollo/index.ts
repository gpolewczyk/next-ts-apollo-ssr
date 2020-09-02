import { ApolloClient, InMemoryCache, NormalizedCache } from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCache>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    uri: "https://countries-274616.ew.r.appspot.com/",
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initilState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initilState) {
    _apolloClient.cache.restore(initilState);
  }

  if (typeof window === "undefined") {
    return _apolloClient;
  }

  return apolloClient ?? _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

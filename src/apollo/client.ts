import { ApolloClient, InMemoryCache } from '@apollo/client'

const REACT_APP_GITHUB_TOKEN =
  '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'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${REACT_APP_GITHUB_TOKEN}`,
  },
})

export default client

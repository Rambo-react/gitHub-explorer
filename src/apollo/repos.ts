import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query SearchRepos(
    $query: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    search(
      query: $query
      type: REPOSITORY
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            languages(first: 5) {
              nodes {
                name
              }
            }
            primaryLanguage {
              name
            }
            forkCount
            stargazerCount
            updatedAt
            licenseInfo {
              name
            }
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      repositoryCount
    }
  }
`

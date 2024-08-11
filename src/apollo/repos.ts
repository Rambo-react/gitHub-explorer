import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query SearchRepos($query: String!, $first: Int!) {
    search(query: $query, type: REPOSITORY, first: $first) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            languages(first: 5) {
              edges {
                node {
                  name
                }
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
        endCursor
        hasNextPage
      }
    }
  }
`

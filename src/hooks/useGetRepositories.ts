import { ApolloError, useQuery } from '@apollo/client'

import { GET_REPOSITORIES } from '../apollo/repos'
import { Repository } from '../redux/slices/types'

interface PageInfo {
  endCursor: string | null
  startCursor: string | null
  hasNextPage: boolean | null
  hasPreviousPage: boolean | null
}

interface RepositoryNode {
  node: {
    __typename: 'Repository'
    id: string
    name: string
    forkCount: number
    stargazerCount: number
    updatedAt: string
    primaryLanguage?: {
      __typename: 'Language'
      name: string
    } | null
    description: string
    licenseInfo: { name: string }
    languages: {
      nodes: {
        name: string
        __typename: 'Language'
      }[]
      __typename: 'LanguageConnection'
    }
  }
}

interface useGetRepositoriesPararms {
  searchText: string
  first: number | null
  after: string | null
  last: number | null
  before: string | null
}

type UseGetRepositoriesReturnType = {
  data: Repository[]
  pageInfo: PageInfo
  repositoryCount: number | undefined
  loading: boolean
  error: ApolloError | undefined
}

/**
 * A custom hook for fetching and formatting repository data based on a search query.
 *
 * @param query - A string representing the search term used to filter repositories.
 * @param first - A number of repositories to display on one page.
 * @param after - A repository cursor for pagination(next page).
 * @param last - A number of repositories to display on one page.
 * @param before - A repository cursor for pagination(prev page).
 * @returns An object containing:
 *   - `data`: An array of formatted repository objects, with details such as id, name, primary language, license, number of forks, stars, last updated date, description, and additional languages.
 *   - `loading`: A boolean indicating whether the data is currently being loaded.
 *   - `error`: An `ApolloError` object, if an error occurred during the data fetch; otherwise, `undefined`.
 *   - `pageInfo`: A page object with information such as the existence of the next/previous page, the next/previous cursor.
 *   - `repositoryCount`: The number of repositories found that match the search criteria.
 *   - `fetchMore`: A function that helps you fetch the next set of results for a paginated list field.
 */

export const useGetRepositories = ({
  searchText,
  first,
  after,
  last,
  before,
}: useGetRepositoriesPararms): UseGetRepositoriesReturnType => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { query: searchText, first, after, last, before },
    skip: !searchText,
  })

  const outData: Repository[] = data?.search.edges?.map(
    (item: RepositoryNode) => ({
      id: item.node.id,
      name: item.node.name,
      primaryLanguage: item.node.primaryLanguage?.name ?? '',
      forkCount: item.node.forkCount,
      stargazerCount: item.node.stargazerCount,
      updatedAt: new Date(item.node.updatedAt).toLocaleDateString('De-de'),
      description: item.node.description,
      licenseInfo: item.node.licenseInfo?.name ?? '',
      languages: item.node.languages.nodes.map((lang) => lang.name) ?? [],
    })
  )
  const pageInfo = {
    endCursor: data?.search.pageInfo.endCursor,
    startCursor: data?.search.pageInfo.startCursor,
    hasNextPage: data?.search.pageInfo.hasNextPage,
    hasPreviousPage: data?.search.pageInfo.hasPreviousPage,
  }

  const repositoryCount = data?.search.repositoryCount

  return {
    data: outData,
    loading,
    error,
    pageInfo,
    repositoryCount,
  }
}

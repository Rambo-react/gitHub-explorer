export interface Repository {
  id: string
  name: string
  description: string
  languages: string[] | []
  primaryLanguage: string | null
  forkCount: number
  stargazerCount: number
  updatedAt: string
  licenseInfo: string | null
}

import { Box, CircularProgress, Container, Typography } from '@mui/material'
import { SearchBar } from './components/SearchBar/SearchBar'
import { RepoTable } from './components/RepoTable/RepoTable'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from './apollo/repos'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'

function App() {
  const searchTerm = useSelector((state: RootState) => state.repos.searchTerm)

  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { query: searchTerm, first: 10 },
    skip: !searchTerm,
  })

  if (data) {
    console.log(data)
  }

  return (
    <>
      <Box sx={{ backgroundColor: '#00796b', padding: '10px' }}>
        <Container maxWidth='lg'>
          <SearchBar />
        </Container>
      </Box>
      <Box>
        {loading && <CircularProgress />}
        {error && (
          <Typography color='error'>Ошибка: {error.message}</Typography>
        )}
        {data && <RepoTable repositories={data.search.edges} />}
      </Box>
    </>
  )
}

export default App

import { Box, Container } from '@mui/material'
import { SearchBar } from './components/SearchBar/SearchBar'

function App() {
  return (
    <>
      <Box sx={{ backgroundColor: '#00796b', padding: '10px' }}>
        <Container maxWidth='lg'>
          <SearchBar />
        </Container>
      </Box>
    </>
  )
}

export default App

import { RootState } from './redux/store'
import { Repositories } from './components/Repositories'
import { Layout } from './components/Layout/Layout'
import { useSelector } from 'react-redux'
import { Welcome } from './components/Welcome'

function App() {
  const searchTerm = useSelector((state: RootState) => state.repos.searchTerm)
  return <Layout>{searchTerm ? <Repositories /> : <Welcome />}</Layout>
}

export default App

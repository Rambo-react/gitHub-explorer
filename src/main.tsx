import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { ApolloProvider } from '@apollo/client'
import client from './apollo/client'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <CssBaseline />
      <App />
    </ApolloProvider>
  </Provider>
)

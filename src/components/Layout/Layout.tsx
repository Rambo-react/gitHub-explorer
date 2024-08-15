import { Box, Grid } from '@mui/material'
import React, { memo, ReactNode } from 'react'
import { Header } from '../Header'
import { SearchBar } from '../SearchBar'
import { Footer } from '../Footer/Footer'

interface Props {
  children: ReactNode
}

export const Layout: React.FC<Props> = memo(({ children }) => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='space-between'
      minHeight='100vh'
    >
      <Header>
        <SearchBar />
      </Header>
      <Box flex='1 0 0' component='main'>
        {children}
      </Box>
      <Footer />
    </Grid>
  )
})

Layout.displayName = 'Layout'

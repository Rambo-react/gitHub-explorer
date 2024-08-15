import { Box, Container } from '@mui/material'
import React, { memo, ReactNode } from 'react'
import styles from './Header.module.css'

interface Props {
  children: ReactNode
}

export const Header: React.FC<Props> = memo(({ children }) => {
  return (
    <Box className={styles.header}>
      <Container maxWidth='xl'>{children}</Container>
    </Box>
  )
})

Header.displayName = 'Header'

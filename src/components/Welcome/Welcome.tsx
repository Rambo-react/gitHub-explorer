import { Box, Typography } from '@mui/material'
import React, { memo } from 'react'
import styles from './Welcome.module.css'

export const Welcome: React.FC = memo(() => {
  return (
    <Box className={styles.container}>
      <Typography variant='h3'>Добро пожаловать!</Typography>
    </Box>
  )
})
Welcome.displayName = 'Welcome'

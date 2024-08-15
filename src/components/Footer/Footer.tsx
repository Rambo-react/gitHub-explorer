import { Box } from '@mui/material'
import React, { memo } from 'react'
import styles from './Footer.module.css'

export const Footer: React.FC = memo(() => {
  return <Box className={styles.footer} component='footer'></Box>
})

Footer.displayName = 'Footer'

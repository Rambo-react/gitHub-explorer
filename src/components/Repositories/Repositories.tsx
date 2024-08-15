import { Grid, Typography } from '@mui/material'
import { RepoTable } from '../RepoTable/RepoTable'
import { RepoDetails } from '../RepoDetails/RepoDetails'
import { memo } from 'react'
import styles from './Repositories.module.css'

export const Repositories: React.FC = memo(() => {
  return (
    <Grid container height='100%'>
      <Grid
        container
        item
        xs={8}
        direction='column'
        justifyContent='space-between'
        p={2}
      >
        <Typography variant='h3'>Результаты поиска</Typography>
        <RepoTable />
      </Grid>
      <Grid item xs={4} className={styles.details}>
        <RepoDetails />
      </Grid>
    </Grid>
  )
})

Repositories.displayName = 'Repositories'

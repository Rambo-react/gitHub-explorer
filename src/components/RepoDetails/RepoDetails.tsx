import React, { memo } from 'react'
import StarIcon from '@mui/icons-material/Star'
import { Box, Chip, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import styles from './RepoDetails.module.css'

export const RepoDetails: React.FC = memo(() => {
  const repository = useSelector((state: RootState) => state.repos.selectedRepo)
  console.log('repoDetails')
  return (
    <Box className={styles.container} p={1}>
      {repository ? (
        <>
          <Typography variant='h5' marginY={1}>
            {repository.name}
          </Typography>
          <Box className={styles.between}>
            <Chip label={repository.primaryLanguage || 'Н/Д'} color='primary' />
            <Box className={styles.between} gap={1}>
              <StarIcon className={styles.icon} />
              <Typography variant='body2'>
                {repository.stargazerCount.toLocaleString('ru-RU')}
              </Typography>
            </Box>
          </Box>

          <Stack direction='row' spacing={1} marginY={1}>
            {repository.languages.map((lang, index) => (
              <Chip label={lang || 'Н/Д'} key={index} sx={{ height: '24px' }} />
            ))}
          </Stack>

          <Typography variant='body2' marginY={2}>
            {repository.licenseInfo}
          </Typography>
          <Typography variant='body1' marginY={1}>
            {repository.description}
          </Typography>
        </>
      ) : (
        <Box className={`${styles.container} ${styles.center}`}>
          <Typography variant='h6'>Выберите репозиторий</Typography>
        </Box>
      )}
    </Box>
  )
})

RepoDetails.displayName = 'RepoDetails'

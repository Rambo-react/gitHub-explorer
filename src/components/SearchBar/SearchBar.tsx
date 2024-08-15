import { Box, Button, TextField } from '@mui/material'
import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../../redux/slices/repoSlice'
import styles from './SearchBar.module.css'

export const SearchBar: React.FC = memo(() => {
  const [localSearchTerm, setLocalSearchTerm] = useState('')
  const dispatch = useDispatch()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setSearchTerm(localSearchTerm))
  }

  return (
    <Box component='form' onSubmit={handleSearch} className={styles.container}>
      <TextField
        className={styles.input}
        placeholder='Введите поисковый запрос'
        variant='outlined'
        size='small'
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
      />
      <Button type='submit' variant='contained' color='primary' size='large'>
        Искать
      </Button>
    </Box>
  )
})

SearchBar.displayName = 'SearchBar'

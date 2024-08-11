import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../../redux/slices/repoSlice'

export const SearchBar: React.FC = () => {
  const [localSearchTerm, setLocalSearchTerm] = useState('')
  const dispatch = useDispatch()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setSearchTerm(localSearchTerm))
  }

  return (
    <Box
      component='form'
      onSubmit={handleSearch}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <TextField
        sx={{
          flex: 1,
          marginRight: 2,
          backgroundColor: 'white',
          borderRadius: '4px',
        }}
        placeholder='Введите поисковый запрос'
        variant='outlined'
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
      />
      <Button type='submit' variant='contained' color='primary'>
        Искать
      </Button>
    </Box>
  )
}

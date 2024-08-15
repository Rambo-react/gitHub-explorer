import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Repository } from './types'

interface RepoState {
  searchTerm: string
  selectedRepo: Repository | null
}

const initialState: RepoState = {
  searchTerm: '',
  selectedRepo: null,
}

const repoSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload
    },
    setSelectedRepo(state, action: PayloadAction<Repository | null>) {
      state.selectedRepo = action.payload
    },
  },
})

export const { setSearchTerm, setSelectedRepo } = repoSlice.actions
export default repoSlice.reducer

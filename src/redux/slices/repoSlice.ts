import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RepoState {
  searchTerm: string
  orderBy: {
    field: string
    direction: 'ASC' | 'DESC'
  }
}

const initialState: RepoState = {
  searchTerm: '',
  orderBy: {
    field: 'STARS',
    direction: 'DESC',
  },
}

const repoSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload
    },
    setOrderBy(
      state,
      action: PayloadAction<{ field: string; direction: 'ASC' | 'DESC' }>
    ) {
      state.orderBy = action.payload
    },
  },
})

export const { setSearchTerm, setOrderBy } = repoSlice.actions
export default repoSlice.reducer

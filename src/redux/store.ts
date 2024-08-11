import { configureStore } from '@reduxjs/toolkit'
import repoReducer from './slices/repoSlice'

const store = configureStore({
  reducer: {
    repos: repoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

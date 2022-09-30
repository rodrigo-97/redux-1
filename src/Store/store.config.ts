import { configureStore } from '@reduxjs/toolkit'
import numberReducer from './numbers.store'

export const store = configureStore({
  reducer: {
    numbers: numberReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  min: 0,
  max: 0
}

export const numberSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    changeMinNumber: (state, action) => {
      state.min = action.payload
    },

    changeMaxNumber: (state, action) => {
      state.max = action.payload
    }
  }
})

export const { changeMaxNumber, changeMinNumber } = numberSlice.actions

export default numberSlice.reducer


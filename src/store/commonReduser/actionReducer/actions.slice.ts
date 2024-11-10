import { createSlice } from '@reduxjs/toolkit'

export interface IActionSlice {
  isBurgerOpen: boolean
}

const initialState: IActionSlice = {
  isBurgerOpen: false,
}

const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    setIsOpenBurger: (state, { payload }: { payload: boolean }) => {
      state.isBurgerOpen = payload
    },
  },
})

export const { setIsOpenBurger } = actionSlice.actions

export default actionSlice.reducer

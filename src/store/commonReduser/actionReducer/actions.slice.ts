import { createSlice } from '@reduxjs/toolkit'

export interface IActionSlice {
  isBurgerOpen: boolean
  orderUrl: Undefinable<string>
}

const initialState: IActionSlice = {
  isBurgerOpen: false,
  orderUrl: undefined
}

const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    setIsOpenBurger: (state, { payload }: { payload: boolean }) => {
      state.isBurgerOpen = payload
    },
    setOrderUrl: (state, { payload }: { payload: Undefinable<string> }) => {
      state.isBurgerOpen = payload
    },
  },
})

export const { setIsOpenBurger, setOrderUrl } = actionSlice.actions

export default actionSlice.reducer

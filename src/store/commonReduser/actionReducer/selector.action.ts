import { createSelector } from 'reselect'

import type { IActionSlice } from './actions.slice'
import type { RootState } from '../../store'

export const actionsStateSelector = createSelector(
  (state: RootState) => state,
  (state): IActionSlice => state.actionReducer,
)

export const isOpenBurgerSelector = createSelector(actionsStateSelector, (state) => state.isBurgerOpen)

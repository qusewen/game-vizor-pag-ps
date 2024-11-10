import { combineReducers } from '@reduxjs/toolkit'

import actionReducer from './actionReducer/actions.slice'

export const rootReducer = combineReducers({
  actionReducer,
})

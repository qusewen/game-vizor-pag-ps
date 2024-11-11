import { combineReducers } from '@reduxjs/toolkit'

import actionReducer from './actionReducer/actions.slice'
import {backBaseApi} from "shared/api";

export const rootReducer = combineReducers({
  [backBaseApi.reducerPath]: backBaseApi.reducer,
  actionReducer,
})

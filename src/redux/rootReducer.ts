import { combineReducers } from '@reduxjs/toolkit'
import userSlice from '../features/user/userReducer'

const rootReducer = combineReducers({userSlice})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
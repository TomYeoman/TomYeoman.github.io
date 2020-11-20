import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserDetails {
    username: string
}

let initialState: UserDetails = {
    username: "Tommy",
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserDetails>) {
      const { username } = action.payload
      state.username = username
    },
  }
})

export const {
    login,
} = userSlice.actions

export default userSlice.reducer
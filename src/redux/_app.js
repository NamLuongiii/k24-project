import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isLogin: false,
  },
  reducers: {
    login: state => {
      state.isLogin = true;
    },
    logout: state => {
      state.isLogin = false
    },
  }
})

export const { login, logout } = appSlice.actions
export default appSlice.reducer
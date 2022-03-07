import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
      value: false,
    },
    reducers: {
      login: (state) => {
        state.value = true
      },
      logout: (state) => {
        state.value = false;
      },
    },
  })

  export const { login, logout, incrementByAmount } = loginSlice.actions
  
  export default loginSlice.reducer
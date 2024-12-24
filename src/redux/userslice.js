import { createSlice } from '@reduxjs/toolkit';

// Initial state of the user
const initialState = {
  id: null,
  name: '',
  email: '',
  preferences: {},
};

// Define the user slice
const userSlice = createSlice({
  name: 'user', // The name of the slice
  initialState,
  reducers: {
    // Action to set user data
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    // Action to clear user data (e.g., during logout)
    clearUser: () => {
      return initialState;
    },
  },
});

// Export actions
export const { setUser, clearUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;

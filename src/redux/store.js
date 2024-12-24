import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userslice'; // Import the user slice

// Configure the store with the user slice
const store = configureStore({
  reducer: {
    user: userReducer, // Add the user reducer to the store
  },
});

export default store;

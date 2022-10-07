/*
 * redux/store.js
 *
 * Initialize the Redux store & configure Thunk
 */

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;

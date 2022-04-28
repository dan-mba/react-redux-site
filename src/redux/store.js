/*
 * redux/store.js
 *
 * Initialize the Redux store & configure Thunk
 */

import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;

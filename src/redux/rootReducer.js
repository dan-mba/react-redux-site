/*
 * redux/rootReducer.js
 *
 * combine the component reducers
 */

import nav from './reducers/nav';
import code from './reducers/code';

const rootReducer = {
  nav,
  code,
};

export default rootReducer;

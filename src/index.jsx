/*
 * index.jsx
 *
 * The file renders the main App component wrapped by the Redux store
 */

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';

import 'modern-normalize/modern-normalize.css';
import 'index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/campers-for-rent-in-uk">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

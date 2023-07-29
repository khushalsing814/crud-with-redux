import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider basename='/crud-with-redux' store={store}>
        <App />
   </Provider>  
  </React.StrictMode>
);
reportWebVitals();

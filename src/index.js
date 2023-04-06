import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyContext from './Compenents/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MyContext>

    <App />
  </MyContext>

);


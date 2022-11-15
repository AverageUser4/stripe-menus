import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';
import App from './App.js';

import { MyProvider } from './context';

const root = ReactDOM.createRoot(window.root);
root.render(
  <MyProvider>
    <App/>
  </MyProvider>
);
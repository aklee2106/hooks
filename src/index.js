import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store.js';
import './index.css';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  let initialState = {
    token: null,
    data: null
  };
  let store = configureStore(initialState);
  window.getState = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);

});


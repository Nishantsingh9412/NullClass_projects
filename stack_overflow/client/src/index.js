import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {  createRoot , applyMiddleware , compose, createStore } from 'redux';
// import {createStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import Reducers from './reducers'


const store = createStore(Reducers , compose(applyMiddleware(thunk)));;

// const root =.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Provider store={store} > 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>  ,  
  document.getElementById('root')  
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Imports for redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Just like any other state, your store needs an initial set of values
const initialState = {
  userProfile: {
    firstName: 'Sarah',
    lastName: 'Connor',
    email: 'sarah@skynet.com',
    role: 'customer',
    friends: [
      'John Connor',
      'Kyle Reese',
    ],
  },

}

// We need a reducer (a function that will return a new state)
// - reducer.js
// CHANGE_NAME expects the payload to have the firstName and lastName properties
// Make sure they are present in the payload of the action
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          firstName: payload.firstName,
          lastName: payload.lastName,
        }
      };
    case 'CLEAR_USER':
      return {
        ...state,
        userProfile: {},
      };
    default:
      return state;
  }
}

// We need to make a store using the redux library
// Usually the store is created in a separate file, we'll do it here.
// - store.js
const store = createStore(reducer, initialState);

// Use the Provider component to provide the store to you app
// The store is just a fancy word for state
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

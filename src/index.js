import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import FirebaseContext from './contexts/firebase';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { firebase } from './lib/firebase.prod';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

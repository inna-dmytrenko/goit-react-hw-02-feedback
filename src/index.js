import React from 'react';
import ReactDOM from 'react-dom';
import {  ThemeProvider} from "@emotion/react";
import './index.css';
import App from './App';
const theme = {
  colors: {
    white: '#ffffff',
    black: '#010101'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


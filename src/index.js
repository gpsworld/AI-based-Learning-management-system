import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {useState, useEffect} from 'react';
import './App.css'
import DisplayData from './DisplayData';
import Agenda from './Agenda';
import Documentation from './Documentation';



// import HiringManagerPortal from './hiringManager';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Agenda/> */}
    {/* <Documentation/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

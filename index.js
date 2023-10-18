import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bulma/css/bulma.css";
import axios from "axios";

axios.default.withCreadentials = true; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



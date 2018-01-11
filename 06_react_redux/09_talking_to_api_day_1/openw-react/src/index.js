import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY2;

ReactDOM.render(<App apiKey={API_KEY} />, document.getElementById('root'));
registerServiceWorker();

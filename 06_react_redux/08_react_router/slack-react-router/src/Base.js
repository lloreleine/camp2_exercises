import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from './Login';

const Base = () => (
<Router>
  <div>
    <Route path="/" component={Login}/>
  </div>
</Router>
)

export default Base;

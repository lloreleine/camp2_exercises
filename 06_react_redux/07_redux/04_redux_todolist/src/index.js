import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import ConnectedTasks from './Tasks';
import store from './Store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedTasks />
  </Provider>,
  document.getElementById('root')
);

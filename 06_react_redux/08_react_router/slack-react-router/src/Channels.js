import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Chat from './Chat';

function Channels(props){
  return (
    <Router>
    <div>
      <h3>Welcome {props.userName}</h3>
      <h4>Please choose your channel:</h4>
      <div className="bloc-channels">
        <h3><Link to="/channels/1">Channel 1</Link></h3>
      </div>

      <div className="bloc-channels">
        <h3><Link to="/channels/2">Channel 2</Link></h3>
      </div>

      <Route
        path="/channels/:id"
        render={(routerProps) => (
          <Chat {...routerProps} msgsList={props.msgsList} currentUser={props.currentUser} submitMsg={props.submitMsg} handleMsg={props.handleMsg} currentMsg={props.currentMsg}/>
        )}
      />

    </div>
    </Router>
  )
}

export default Channels;

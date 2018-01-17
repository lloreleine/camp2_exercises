import React from 'react';
import './App.css';

function CallApi(props){
  return (
    <form onSubmit={props.submitOpenW}>
      <input type="text" value={props.city} onChange={props.handleInput} placeholder="Where are you?" />
    </form>
  )
}

export default CallApi;

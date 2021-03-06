import React from 'react';
import './App.css';

function Form(props){
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" onChange={props.handleInput} placeholder="What's your name?" /><br/>
      <button className="margin-top" type="submit">Login</button>
    </form>
  )
}

export default Form;

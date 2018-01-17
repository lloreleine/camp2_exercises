import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

function Login(props){
  // handleChange = event => {
  //   this.setState({ value: event.target.value });
  // };
  //
  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.handleUserName(this.state.value);
  // };
  return (
    <form className="Login" onSubmit={(event) => props.handleSubmit(event.target.value)}>
      <div>
        Please choose a login name
      </div>
      <input
        type="text"
        onChange={(event) => props.handleChange(event.target.value)}
        value={props.currentValue}
      />
      <button type="submit">Log in</button>
    </form>
  );
}

function mapLoginToProps(state){
  return {

  }
}

function mapDispatchToProps(dispatch){
  return {
    handleChange: (value) => dispatch({type: "LOGIN_USER", value: value }),
    handleSubmit: (value) => dispatch({type: "LOAD_CHAT", value: value })
  }
}


const ConnectedLogin = connect(mapLoginToProps, mapDispatchToProps)(Login);
export default ConnectedLogin;

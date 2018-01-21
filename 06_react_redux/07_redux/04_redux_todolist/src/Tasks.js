import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import store from './Store';
import ConnectedList from './List';

class Tasks extends Component {

  handleInput = (event) => {
    this.props.dispatch({
    type: "HANDLE_INPUT_TASK",
    value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
    type: "SUBMIT_TASK",
    value: this.props.current
    })
  }

  render(){
    return (
      <div className="margin">
        <form onSubmit={this.handleSubmit}>
          <label>
            Add task:&nbsp;
            <input type="text" value={this.props.current} onChange={this.handleInput} />
          </label>
          <span className={"counter"}>Counter : {this.props.counter}</span>
        </form>

        {this.props.list.map((task, index) =>
          <ConnectedList task={task} index={index} />
        )}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    current: state.current,
    list: state.list,
    counter: state.counter
  }
}


let ConnectedTasks = connect(mapStateToProps)(Tasks);
export default ConnectedTasks;

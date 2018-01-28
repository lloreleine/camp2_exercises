import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import store from './Store';
import ConnectedList from './List';
import ConnectedFilters from './Filters';

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

  switchTitle = () => {
    this.props.dispatch({
    type: "SWITCH_TITLE",
    value: this.props.title
    })
  }

  filterTasks = (task) => {
    this.props.dispatch({
      type: "FILTER_TASKS",
      value: task
    })
  }

  render(){
    return (
      <div className="margin">
        <h2 onClick={this.switchTitle}>{this.props.title}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add task:&nbsp;
            <input type="text" value={this.props.current} onChange={this.handleInput} />
          </label>
          <span className={"counter"}>Counter : {this.props.list.length}</span>
        </form>

        {this.props.list.map((task, index) =>
          <ConnectedList key={task.value + index} task={task} index={index} />
        )}

        <ConnectedFilters filter='All'/>
        <ConnectedFilters filter='To Do Tasks'/>
        <ConnectedFilters filter='Done Tasks'/>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    current: state.toDoList.current,
    list: state.toDoList.list,
    title: state.changeTitle.title,
    visFilter: state.visibilityFilter.visFilter
  }
}


let ConnectedTasks = connect(mapStateToProps)(Tasks);
export default ConnectedTasks;

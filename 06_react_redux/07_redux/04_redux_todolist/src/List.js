import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class List extends Component {

  handleCheck = (task, index) => {
    this.props.dispatch({
    type: "TASK_CHECKED",
    task: task,
    index: index
    })
  }

  handleDelete = (task, index) => {
    this.props.dispatch({
    type: "DELETE_TASK",
    task: task,
    index: index
    })
  }

  render(){

    let checkedStyle = "";
    let deleteButton = null;
    if (this.props.task.isChecked) {
      deleteButton = (<button onClick={() => this.handleDelete(this.props.task, this.props.index)}>Delete</button>)
      checkedStyle = "strikethrough";
    }

    return (
      <div className="margin">
        <input
          type="checkbox"
          name={this.props.list.indexOf(this.props.task)}
          value={this.props.task.value}
          checked={this.props.task.isChecked}
          onChange={() => {this.handleCheck(this.props.task, this.props.index)}}
        />
        &nbsp;&nbsp;
        <label className={checkedStyle}>{this.props.task.value}</label>
        &nbsp;&nbsp;
        {deleteButton}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    current: state.current,
    list: state.list
  }
}

let ConnectedList = connect(mapStateToProps)(List);
export default ConnectedList;


// let checkedStyle = "";
// let deleteButton = null;
// if (props.task.isChecked) {
//   deleteButton = (<button onClick={() => props.handleDelete(props.task, props.index)}>Delete</button>)
//   checkedStyle = "strikethrough";
// }

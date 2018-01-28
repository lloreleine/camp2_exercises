import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class List extends Component {

  render(){

    let checkedStyle = "";
    let deleteButton = null;
    if (this.props.task.isChecked) {
      deleteButton = (<button onClick={() => this.props.handleDelete(this.props.task, this.props.index)}>Delete</button>)
      checkedStyle = "strikethrough";
    }

    console.log(this.props.task.isChecked);

    // Permet d'alléger la syntaxe des variables utilisées dans le render :
    // const { isChecked, value } = this.props.task;

    return (
      <div className="margin">
        <input
          type="checkbox"
          checked={this.props.task.isChecked}
          onChange={() => {this.props.handleCheck(this.props.task)}}
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
    list: state.toDoList.list
  }
}

function mapDispatchToProps(dispatch){
  return {
    handleDelete: (task, index) => dispatch({
      type: "DELETE_TASK",
      task: task,
      index: index
    }),
    handleCheck: (task) => dispatch({
      type: "TASK_CHECKED",
      task: task
    })
  }
}

let ConnectedList = connect(mapStateToProps, mapDispatchToProps)(List);
export default ConnectedList;

import React, { Component } from 'react';
import './App.css';

function List(props) {
  let checkedStyle = "";
  let deleteButton = null;
  if (props.task.isChecked) {
    deleteButton = (<button onClick={() => props.handleDelete(props.task, props.index)}>Delete</button>)
    checkedStyle = "strikethrough";
  }

  return (
    <div className="margin">
      <input
        type="checkbox"
        name={props.index}
        value={props.task.value}
        checked={props.task.isChecked}
        onChange={() => props.handleCheck(props.task)}
      />
      &nbsp;&nbsp;
      <label className={checkedStyle}>{props.task.value}</label>
      &nbsp;&nbsp;
      {deleteButton}
    </div>
  );
}

export default List;

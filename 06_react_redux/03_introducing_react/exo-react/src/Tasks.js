import React, { Component } from 'react';
import './App.css';
import List from './List';

class Tasks extends Component {
  constructor(props){
    super(props)
    this.state = {
      current: '',
      list:[]
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    let newList = this.state.list;
    console.log(newList);
    if(this.state.current !== ''){
      newList.push({value: this.state.current, isChecked: false});
    }
    console.log(newList);
    this.setState({
      list: newList,
      current: ''
     });
  }

  handleInput = (evt) => {
    this.setState({current: evt.target.value});
  }

  handleCheck = (task) => {
    let newList = this.state.list.map(tsk => {
      if (tsk.value === task.value) {
        tsk.isChecked = !task.isChecked
      }

      return tsk;
    })

    this.setState({ list: newList })
  }

  handleDelete = (task, index) => {
    let newListClean = this.state.list;
    newListClean.splice(index, 1);
    this.setState({
      list: newListClean
    });
  }

  render() {
    return (
      <div className="margin">
        <form onSubmit={this.handleSubmit}>
          <label>
            Add task:&nbsp;
            <input type="text" value={this.state.current} onChange={this.handleInput} />
          </label>
        </form>
          {this.state.list.map((task, index) =>
            <List
              key={index}
              index={index}
              task={task}
              handleCheck={this.handleCheck}
              handleDelete={this.handleDelete}
            />
          )}
      </div>
    );
  }
}

export default Tasks;

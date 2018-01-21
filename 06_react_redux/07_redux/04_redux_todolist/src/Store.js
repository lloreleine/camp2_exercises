import React from 'react';
import { createStore } from 'redux';
import './App.css';

const initialState = {
  current: '',
  list:[],
  counter: 0
};

function toDoList(state = initialState, action){
  switch(action.type){

    case "HANDLE_INPUT_TASK":
    console.log(action.value);
      return {
        ...state,
        current: action.value
      };

    case "SUBMIT_TASK":
      let newList = state.list;
      if(state.current !== ''){
        newList.push({value: state.current, isChecked: false});
      }
      console.log(state.list);
      return {
        ...state,
        current: '',
        list: newList,
        counter: state.counter + 1
      };

    case "TASK_CHECKED":
      let listCheck = state.list.map(tsk => {
        if (tsk.value === action.task.value) {
          tsk.isChecked = !action.task.isChecked
        }
        return tsk;
      })
      return {
        ...state,
        list: listCheck
      };

    case "DELETE_TASK":
      let newListClean = state.list;
      newListClean.splice(action.index, 1);
      console.log(newListClean);
      return {
        ...state,
        list: newListClean,
        counter: state.counter - 1
      };

    default :
      return state;
  }
}

function changeTitle(state = initialState, action){
  switch(action.type){
    case "CHANGE":
      return {
        title: 'BAZINGA!'
      };
    default :
      return state;
  }
}


let store = createStore(toDoList);
export default store;








  // handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   let newList = this.props.list;
  //   if(this.props.current !== ''){
  //     newList.push({value: this.props.current, isChecked: false});
  //   }
  //   this.setState({
  //     list: newList,
  //     current: ''
  //    });
  // }
  //
  // handleCheck = (task) => {
  //   let newList = this.props.list.map(tsk => {
  //     if (tsk.value === task.value) {
  //       tsk.isChecked = !task.isChecked
  //     }
  //
  //     return tsk;
  //   })
  //
  //   this.setState({ list: newList })
  // }
  //
  // handleDelete = (task, index) => {
  //   let newListClean = this.props.list;
  //   newListClean.splice(index, 1);
  //   this.setState({
  //     list: newListClean
  //   });
  // }

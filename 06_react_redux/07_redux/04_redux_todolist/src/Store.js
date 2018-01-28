import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const initialState = {
  current: '',
  list:[],
  title: 'My ToDo List',
  visFilter: 'all'
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
      // !! let NewList = state.list ne fait pas une copie de l'état.
      // Elle affecte directement l'état !! So:
      // let newList = state.list.slice();
      if(state.current !== ''){
        return {
          ...state,
          current: '',
          list: [ ...state.list, {value: state.current, isChecked: false} ]
        };
      } else{
        return {
          ...state
        }
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

    // slice(index de début d'extraction, index de fin d'extraction exclu)
    // slice (1, 4) -> extrait les éléments aux index 1, 2 et 3.

      return {
        ...state,
        list: [ ...state.list.slice(0, action.index), ...state.list.slice(action.index + 1)]
      };

    default :
      return state;
  }
}

function changeTitle(state = initialState, action){
  switch(action.type){
    case "SWITCH_TITLE":
      return {
        title: 'BAZINGA!'
      };
    default :
      return state;
  }
}

function visibilityFilter(state = initialState, action){
  console.log(action.visFilter);
  switch(action.type){
    case "FILTER_TASKS":
      if(action.visFilter === 'Done Tasks'){
        return {
          ...state,
          filter: 'To Do Tasks'
        };
      }

    case "FILTERS":
    if(action.visFilter === 'Done Tasks'){
      return {
        ...state,
        filter: 'Done Tasks'
      };
    } else if(action.filter === 'To Do Tasks'){
      return {
        ...state,
        filter: 'To Do Tasks'
      };
    } else {
      return state;
    }
    default :
      return state;
  }
}

const allReducers = combineReducers({
    toDoList: toDoList,
    changeTitle: changeTitle,
    visibilityFilter: visibilityFilter
});

let store = createStore(allReducers, applyMiddleware(logger));
export default store;

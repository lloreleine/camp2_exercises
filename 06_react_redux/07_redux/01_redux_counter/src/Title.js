import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import './App.css';


function Title(props){
  return (
    <div className="margin-b">
      <span onClick={props.changeTitle}>{props.title}</span>
    </div>
  )
}

function mapTitleToProps(state) {
  return {
    title: state.titleCombine.title
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTitle: () => dispatch({type: "CHANGE"})
  }
}

const ConnectedTitle = connect(mapTitleToProps, mapDispatchToProps)(Title);
export default ConnectedTitle;

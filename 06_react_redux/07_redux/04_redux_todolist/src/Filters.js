import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class Filters extends Component {

  render(){
    return (
        <button
          className={'buttonsFilters'}
          onClick={() => this.props.handleVisibility(this.props.filter)}>
            {this.props.filter}
        </button>
    );
  }
}

function mapStateToProps(state){
  return {
    visFilter: state.visibilityFilter.visFilter
  }
}

function mapDispatchToProps(dispatch){
  return {
    handleVisibility: (filter) => dispatch({
      type: "FILTERS",
      visFilter: filter
    })
  }
}

let ConnectedFilters = connect(mapStateToProps, mapDispatchToProps)(Filters);
export default ConnectedFilters;

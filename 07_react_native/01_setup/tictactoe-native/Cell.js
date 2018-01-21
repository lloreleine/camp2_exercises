import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

function Cell (props){
  return  <TouchableWithoutFeedback onPress={() => props.handlePlay(props.letter, props.index, props.player)} />
}

export default Cell;

// <TouchableWithoutFeedback onPress={props.handlePlay}>
//   <TextInput placeholder=" _ "/>
// </TouchableWithoutFeedback>

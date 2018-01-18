import React from 'react';
import './App.css';

function Message(props){
  let textColor = "red";
  if(props.currentUser === props.nameUser){
    textColor='blue';
  }
  return(
    <tr>
      <td className={textColor}>{props.nameUser}</td>
      <td>{props.message}</td>
    </tr>
  )
}

export default Message;

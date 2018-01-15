import React from 'react';
import './App.css';

function Message(props){
  let textColor = "red";
  if(props.name === props.msg.nameUser){
    textColor='blue';
  }
  return(
    <tr>
      <td className={textColor}>{props.msg.nameUser}</td>
      <td>{props.msg.text}</td>
    </tr>
  )
}

export default Message;

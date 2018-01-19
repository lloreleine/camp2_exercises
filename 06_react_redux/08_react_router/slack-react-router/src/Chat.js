import React from 'react';
import './App.css';
import Message from './Message';


function Chat(props){
  // console.log(props.msgsList);
  // console.log(props.msgsList[1]);
  // console.log(props.msgsList[2]);

  let channelChatDisplay = null;
  let channelColor = '';

  if (props.match.params.id === "1"){
    channelColor = 'channelPurple';
  }
  else if (props.match.params.id === "2"){
    channelColor = 'channelBlue';
  }

  if (props.match.params.id === "1" && props.msgsList[1]) {
    channelChatDisplay = props.msgsList[1].map((msg,i) => <Message key={i} currentUser={props.currentUser} message={msg.text} nameUser={msg.nameUser} channel={msg.channel} />);
  }
  else if (props.match.params.id === "2" && props.msgsList[2]){
    channelChatDisplay = props.msgsList[2].map((msg,i) => <Message key={i} currentUser={props.currentUser} message={msg.text} nameUser={msg.nameUser} channel={msg.channel} />);
  }
  else {
    channelChatDisplay = <Message currentUser={"Slacky"} message={"Be the first to write your message"} nameUser={"Slacky"} />;
  }

  return (
    <div>
      <h5 className={channelColor}>Slacky Chat - Channel {props.match.params.id}</h5>
      <div className="message-container">
        {channelChatDisplay}
      </div>

      <div className="chatSendMsg">

      <form className="margin-top" onSubmit={(event) => props.submitMsg(event, props.match.params.id)}>
        <input type="text" placeholder="Write your message" rows="4" cols="100" onChange={props.handleMsg} value={props.currentMsg}/>
        <button className="button" type="submit">Send</button>
      </form>

      </div>

    </div>
  )
}

export default Chat;

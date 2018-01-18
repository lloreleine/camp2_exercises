import React from 'react';
import './App.css';
import Message from './Message';


function Chat(props){
  // console.log(props.msgsList);
  // console.log(props.msgsList[1]);
  // console.log(props.msgsList[2]);

  let channelDisplay = null;

    if (props.match.params.id === "1" && props.msgsList[1]) {
      channelDisplay = props.msgsList[1].map((msg,i) => <Message key={i} currentUser={props.currentUser} message={msg.text} nameUser={msg.nameUser} channel={msg.channel} />);
    }
    else if (props.match.params.id === "2" && props.msgsList[2]){
      channelDisplay = props.msgsList[2].map((msg,i) => <Message key={i} currentUser={props.currentUser} message={msg.text} nameUser={msg.nameUser} channel={msg.channel} />);
    }
    else {
      channelDisplay = <Message currentUser={props.currentUser} message={"message-test"} nameUser={"nameUser-test"} channel={"channel-test"} />;
    }

  return (
    <div>
      <h4>Slacky Chat - Channel {props.match.params.id}</h4>
      <form className="margin-top" onSubmit={(event) => props.submitMsg(event, props.match.params.id)}>
        <input type="text" placeholder="Please write your first message" rows="4" cols="60" onChange={props.handleMsg} value={props.currentMsg}/>
      </form>

      <table className="table-msgs">
        <thead>
          <tr>
            <th>From</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>

          {channelDisplay}

        </tbody>
      </table>

    </div>
  )
}

export default Chat;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Chat from './Chat';
import Message from './Message';

class App extends Component {
  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitMsg = this.submitMsg.bind(this);
    this.handleMsg = this.handleMsg.bind(this);
    this.ws = new WebSocket("ws://localhost:4000");
    this.nbUsersElem = document.getElementById("nbUsers");

    this.state = {
      current: '',
      isLoggedIn: false,
      nbUsers:0,
      usersList: [],
      currentMsg: '',
      msgsList:[]
    };
  }

  componentDidMount(){
    this.ws.onmessage = (event) => {
      console.log(event.data);
      console.log("parseint:" + parseInt(event.data, 10));
      if(isNaN(parseInt(event.data, 10))){
        let newMsgsList = this.state.msgsList;
        newMsgsList.push(JSON.parse(event.data));
        this.setState({
          msgsList: newMsgsList
        })
        console.log(this.state.msgsList);
      }
      else {
        this.setState({
          nbUsers: event.data
        })
        console.log("else: " + this.state.nbUsers);
      }

    };

    // Alert the server that the client is gone
    window.addEventListener("beforeunload", () => this.ws.send("CLOSE"));
  }

  handleInput(event) {
    this.setState({
      current: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newListUser = this.state.usersList;
    newListUser.push({name: this.state.current, isLogged: true});

    this.setState({
      usersList: newListUser,
      isLoggedIn: true
    });
  }

  handleMsg(event) {
    this.setState({
      currentMsg: event.target.value
    });
  }

  submitMsg(event) {
    event.preventDefault();
    let newMsg = {
      nameUser: this.state.current,
      text: this.state.currentMsg
    };
    this.ws.send(JSON.stringify(newMsg));
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Slacky React</h1>
        </header>
        <div className="margin-top">
        <p>There is {this.state.nbUsers} user(s) connected.</p>
        {this.state.isLoggedIn === false &&
          <Form user={this.state.user} handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
        }
        {this.state.isLoggedIn &&
          <Chat userLoggedIn={this.state.usersList[0]} submitMsg={this.submitMsg} handleMsg={this.handleMsg}/>
        }
        </div>

        {this.state.isLoggedIn === true &&
        <div>
          <h4>Slacky Chat</h4>
          <table>
            <thead>
              <tr>
                <th>From</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {this.state.msgsList.map((msg,i) => <Message key={i} msg={msg} name={this.state.current} />)}
            </tbody>
          </table>
        </div>
        }

      </div>
    );
  }
}

export default App;

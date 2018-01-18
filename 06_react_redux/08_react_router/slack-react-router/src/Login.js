import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Channels from './Channels';


class Login extends Component {
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
      msgsList:{1: [], 2: []}
    };
  }

  componentDidMount(){
    this.ws.onmessage = (event) => {
      // console.log("parseint:" + parseInt(event.data, 10));
      // console.log(JSON.parse(event.data));
      if(isNaN(parseInt(event.data, 10))){
        let messages = JSON.parse(event.data);
        this.setState({
          msgsList: messages
        })
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

  submitMsg(event, id) {
    event.preventDefault();
    let newMsg = {
      nameUser: this.state.current,
      text: this.state.currentMsg,
      channel: id
    };
    console.log(newMsg);
    this.ws.send(JSON.stringify(newMsg));
    this.setState({
      currentMsg: ''
    })
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
          <Channels currentUser={this.state.current} msgsList={this.state.msgsList} submitMsg={this.submitMsg} handleMsg={this.handleMsg} currentMsg={this.state.currentMsg}/>
        }
        </div>
      </div>
    );
  }
}

export default Login;

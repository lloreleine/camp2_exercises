import React, { Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


class Slack extends Component {
  constructor(props){
    super(props);
    this.displayMsg = this.displayMsg.bind(this);
    this.state = {
      currentMsg: '',
      messages: [],
      conversation: false
    };
  }

  displayMsg(){
    this.state.messages.push({userName: this.props.userName, text: this.state.currentMsg});
    this.setState({
      conversation: true
    })
  }

  render() {
    return (
      <View style={styles.form}>
        <Text>Slacky Chat</Text>
        <Text>Welcome {this.props.userName}</Text>
        <View>
          <Image
            source={{uri: 'https://slacky-server.herokuapp.com/images/slacky-wins.png'}}
            style={styles.slackyCat} />
        </View>

          {this.state.messages.map((message, index) =>
            (
              <View key={index} className="chatWindow">
                <Text style={styles.chatMsgUser}>{message.userName}</Text>
                <Text>{message.text}</Text>
              </View>
            )
          )}

        <View style={styles.inputCase}>
          <TextInput
            style={{height: 20, width: 100, borderColor: 'gray', borderWidth: 1}}
            placeHolder="Write your message"
            onChangeText={(text) => this.setState({currentMsg: text})}
            onSubmitEditing={this.displayMsg}
          />
          <Button onPress={this.submitMsg} title="Send"/>
        </View>
      </View>
    )
  }
}

export default Slack;


const styles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  slackyCat: {
    width: 100,
    height: 100,
    margin: 10,
  },
  inputCase: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  chatWindow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  chatMsgUser: {
    color: 'blue',
    fontWeight: 'bold'
  }
});

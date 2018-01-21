import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Row from './Row';

function Board (props){
  return(
    <View>
      <View style={styles.row}>
        <Text style={styles.margeSide}>1</Text>
        <Text style={styles.margeSide}>2</Text>
        <Text style={styles.margeSide}>3</Text>

      </View>
      <Row
        grid={props.grid}
        player={props.player}
        handlePlay={props.handlePlay}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  margeSide: {
    marginLeft: 33,
  }
});

export default Board;

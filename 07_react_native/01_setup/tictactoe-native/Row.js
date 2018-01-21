import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, FlatList } from 'react-native';


function Row (props){
  let letters = Object.keys(props.grid);
  return(
    <View style={styles.column}>
      {letters.map((letter, index) =>
        <View style={styles.row} key={index}>
          <Text style={styles.margeD}>{letter}</Text>
          {props.grid[letter].map((row, index) =>
            <FlatList data={[row]}
              renderItem={({item}) =>
                <TouchableWithoutFeedback
                  style={styles.cellContent}
                  onPress={() => props.handlePlay(letter, index, props.player)}>
                    <Text style={styles.cell}>{item}</Text>
                </TouchableWithoutFeedback>
              }
            />
          )}

        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    marginTop: 5,
  },
  margeD: {
    marginRight: 10,
  },
  cell: {
    borderRadius:10,
    borderWidth:2,
    borderColor:'rgba(0,0,0,.3)',
    height:40,
    width:40,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'skyblue',
    paddingLeft: 12,
    paddingTop: 5,
  }
});

export default Row;

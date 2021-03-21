import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, CheckBox } from 'react-native';

export const Serial = (props) => {
  const {title, episode, handleAddEpisode, handleSubstractEpisode, index, handleShowMenu, showCheckBoxes, selected, onCheckBoxChange} = props;
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onLongPress={() => handleShowMenu(index)} style={styles.text}>
        <Text style={styles.item}>{title}:</Text>
      </TouchableOpacity> 
      <View style={{ flexDirection: 'row'}}>
        <Button title='-' onPress={() => handleSubstractEpisode(index)} style={styles.item}/>
        <Text style={styles.item}>{episode}</Text>
        <Button title='+' onPress={() => handleAddEpisode(index)} style={styles.item}/>
      </View>
      {showCheckBoxes && <CheckBox value={selected} onValueChange={(event) => onCheckBoxChange(index)}/>}
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      width: '90%',
      flexDirection: "row",
      alignItems: 'center',
      borderBottomWidth: 1,
    },
    text: {
      maxWidth: '80%',
      flex: 1,
    },
    item: {
        padding: 10,
    },
  });
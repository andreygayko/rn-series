import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export const Serial = (props) => {
  const {title, episode, handleAddEpisode, handleSubstractEpisode, index} = props;
  
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.item]}>{title}:</Text>
      <Button title='-' onPress={() => handleSubstractEpisode(index)} style={styles.item}/>
      <Text style={styles.item}>{episode}</Text>
      <Button title='+' onPress={() => handleAddEpisode(index)} style={styles.item}/>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
      width: '90%',
      flexDirection: "row",
      alignItems: 'center',
    },
    text: {
      maxWidth: '70%',
    },
    item: {
        padding: 10,
    },
  });
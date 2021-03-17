import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export const Serial = (props) => {
  const {title, episode} = props;
  
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.item]}>{title}:</Text>
      <Button title='-' style={styles.item}/>
      <Text style={styles.item}>{episode}</Text>
      <Button title='+' style={styles.item}/>
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
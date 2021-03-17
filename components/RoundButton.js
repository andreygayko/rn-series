import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const RoundButton = (props) => {

  const {title, onPress} = props;

  return (
    <TouchableOpacity 
        title={title}
        onPress={onPress}
        style={styles.roundBtn}>
          <Text style={{color: 'white', fontSize: 40}}>+</Text>
         </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    roundBtn: {
        height: 60, 
        width: 60, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'green', 
        borderRadius: 30, 
      },
    });
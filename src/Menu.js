import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export const Menu = props => {
  
  const { cancelHandler, currentSelectionsNumber, allItemsNumber, deleteHandler } = props;
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={cancelHandler} style={styles.btnBack}><Text style={styles.text}>{'<'}</Text></TouchableOpacity>
      <Text style={styles.text}>{`${currentSelectionsNumber}/${allItemsNumber}`}</Text>
      <TouchableOpacity onPress={deleteHandler} style={styles.btnDel}><Text style={styles.text}>{'Delete'}</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272f3b',
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
    paddingTop: '5%',
  },
  btnBack: {
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: .1, 
    flexDirection: 'column', 
  },
  btnDel: {
    marginLeft: '10%'
  },
  text: {
    color: 'white', 
    fontSize: 20,
  }
});
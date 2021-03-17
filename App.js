import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import { Serial } from './components/Serial';
import { RoundButton } from './components/RoundButton';

export default function App() {
  const [serials, setSerials] = useState([{title: '', episode: 0}]);

  const addSerial = () => {
    
  }
  
  return (
    <View style={{flex: 1}}>
    <View style={styles.container}>
      {serials.map((el, i) => (<Serial key={i} title={el.title} episode={el.episode}/>))}
      <TextInput placeholder='Title' style={{borderBottomColor: 'black', borderBottomWidth: 1, width: '50%', marginTop: 20, height: 22}}/>   
    </View>
    <View style={styles.btnAdd}>
      <RoundButton title='+' onPress={addSerial} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '10%',
  },
  btnAdd: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignSelf: 'flex-end',
  },
 
});

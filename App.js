import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Serial } from './src/Serial';
import { RoundButton } from './src/RoundButton';

export default function App() {
  const [serials, setSerials] = useState([]);
  const [newSerial, setNewSerial] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    AsyncStorage.getAllKeys().then((keys) => {
      return AsyncStorage.multiGet(keys)
        .then((result) => {
          const arr = result.map(el => ({title: el[0], episode: el[1]}));
          setSerials(arr);
        }).catch((e) =>{
          Alert(e);
        });
    });
  }, []);  
  
  const saveSerial = async (title, episode) => {
    const arr = serials.map(el => ({title: title, episode: episode}));
    try {
      await AsyncStorage.setItem(title, episode);
    } catch (e) {
      Alert(e);
    }
  };

  const handleAddSerial = () => {
    if (title) {
      const arr = [...serials];
      arr.push({title, episode: 0});
      saveSerial(title, '0');
      setSerials(arr);
      setNewSerial(false);
      setTitle('');
    }
  };

  const handleAddEpisode = (index) => {
    const arr = [...serials];
    const nextEpisode = parseInt(arr[index].episode) + 1;
    arr[index].episode++;
    setSerials(arr);
    saveSerial(arr[index].title, nextEpisode.toString());
  }

  const handleSubstractEpisode = (index) => {
    const arr = [...serials];
    const nextEpisode = arr[index].episode - 1;
    arr[index].episode--;
    setSerials(arr);
    saveSerial(arr[index].title, nextEpisode);
  }
  
  return (
    <View style={{flex: 1}}>
    <View style={styles.container}>
      {serials.map((el, i) => (<Serial key={i} title={el.title} episode={el.episode} index={i} handleAddEpisode={handleAddEpisode} handleSubstractEpisode={handleSubstractEpisode}/>))}

      {newSerial && 
      <View style={{width: '50%'}}>
      <TextInput placeholder='Title' onChangeText={setTitle} style={{borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 20, height: 22}}/>   
      <Button title='Add' onPress={handleAddSerial}/>
      </View>}
    </View>

    {!newSerial &&
    <View style={styles.btnAdd}>
      <RoundButton title='+' onPress={() => setNewSerial(true)}/>
      </View>
    }
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

import React, {Component} from 'react';
import {View, AppRegistery} from 'react-native';
import Liste from './src/components/Liste';
import Header from './src/components/Header';

const App = () => (
  <View style={{flex: 1}}>
    <Header headerText={'Music Albums'} />
    <Liste />
  </View>
);

export default App;

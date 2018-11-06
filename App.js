import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  ResideMenu  from  'react-native-reside-menu';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ResideMenu
          onResideStateChange={(s) => { console.log(s) }}
          VisibleComponent={() =>  <View style={{ flex: 1, backgroundColor: '#cdcdcd' }}  />} 								 
          HiddenComponent={() =>  <View style={{ flex: 1, backgroundColor: 'aqua' }}  />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

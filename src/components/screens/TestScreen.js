import React, { Component } from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   TouchableOpacity
} from 'react-native';


export default class TestScreen extends React.Component {

  render() {
   return (
     <View style = {styles.container}>
       <Text>dsds</Text>
     </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
  },
});

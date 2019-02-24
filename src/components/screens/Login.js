import React, { Component } from 'react';
import {
   AsyncStorage,
   AppRegistry,
   StyleSheet,
   Text,
   View,
   TouchableOpacity
} from 'react-native';
import FBSDK, { LoginManager, LoginButton, AccessToken } from 'react-native-fbsdk'
import { createNewNavigator } from "../../utilities/router";
import API from '../../utilities/api';


export default class Login extends React.Component {

  render() {
   return (
     <View style = {styles.container}>
       <LoginButton
         onLoginFinished={
           (error, result) => {
             if (error) {
               console.log("login has error: " + result.error);
             } else if (result.isCancelled) {
               console.log("login is cancelled.");
             } else {
               AccessToken.getCurrentAccessToken()
                .then((data) => {
                  return API.createUser(data.userID,data.accessToken);
                })
                .then(result => {
                  AsyncStorage.setItem("id", result.id);
                  AsyncStorage.setItem("token", result.token);
                  global.userToken = result.token;
                  global.userID = result.id;
                  this.props.navigation.navigate('ImageDisplayer');
                })

             }
           }
         }
         onLogoutFinished={() => {
           console.log("logout.");
           LoginManager.logOut();
        }}/>
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

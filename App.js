import React from 'react';
import API from './src/utilities/api';
import { createRootNavigator } from "./src/utilities/router";

import { AsyncStorage, Modal, StyleSheet, Text, View, Dimensions, Image, ImageBackground, Animated, PanResponder, TouchableOpacity, Button } from 'react-native';
import ImageDisplayer from './src/components/screens/ImageDisplayer';
import Swiper from 'react-native-deck-swiper';
import ImageViewer from 'react-native-image-zoom-viewer';
import { isSignedIn } from "./src/utilities/auth";



const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
import Icon from 'react-native-vector-icons/Ionicons'


export default class App extends React.Component {

  state = {
    loggedIn: false,
  };

  componentDidMount() {
    isSignedIn()
          .then(res => this.setState({ loggedIn: res }))
          .catch(err => alert("An error occurred"));
    navigator.geolocation.getCurrentPosition(position =>{
          global.location = position.coords;
    })
  }

  render() {
    const {loggedIn} = this.state;
    const Layout = createRootNavigator(loggedIn);
    return <Layout />;
  }

}

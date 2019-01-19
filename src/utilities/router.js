import React from "react";
import { Platform, StatusBar } from "react-native";
import {createSwitchNavigator, createStackNavigator} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import Login from "../components/screens/Login";
import ImageDisplayer from "../components/screens/ImageDisplayer";
import TestScreen from "../components/screens/TestScreen";


export const imageDisplayerNavigator = createStackNavigator({
      ImageDisplayer: {
        screen: ImageDisplayer,
        navigationOptions: {
          header: null
        }
      },
      TestScreen: TestScreen,
    });


export const createRootNavigator = (loggedIn = false) => {
  return createSwitchNavigator(
    {
      Login: {
        screen: Login,
      },
      ImageDisplayer: imageDisplayerNavigator,
    },
    {
      initialRouteName: loggedIn ? "ImageDisplayer" : "Login"
    }
  );
};

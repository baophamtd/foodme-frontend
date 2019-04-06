import { AsyncStorage } from "react-native";

export const onSignIn = (token) => AsyncStorage.setItem("token", token);

export const onSignOut = () => AsyncStorage.removeItem("token");

/*
export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("token")
      .then(res => {
        if (res !== null) {
          //console.log(res);
          global.userToken = res;
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};*/

export const isSignedIn = () => {
  let tokenExists = AsyncStorage.getItem("token")
    .then(res =>{
      if (res !== null) {
        global.userToken = res;
        console.log(res);
        return true;
      } else {
        return false;
      }
    });

  let idExists = AsyncStorage.getItem("id")
    .then(res =>{
      if (res !== null) {
        global.userID = res;
        return true;
      } else {
        return false;
      }
    });

  return Promise.all([tokenExists, idExists])
    .then(results =>{
      if(results[0] && results[1]){
        return true;
      }else {
        return false;
      }
    })
};

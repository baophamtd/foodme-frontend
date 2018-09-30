import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import api from '../../utilities/api';


export default class ImageDisplayer extends Component{

  state = {
    testImage: ''
  };

  componentWillMount(){
    api.searchRestaurants().then((res) =>{
      console.log("here"+res)
      this.setState({
        testImage: res,
      })
    })
  };

  render(){
    return (
      <View style = {styles.container}>
        <View style = {styles.imageContainer}>
          <Image
            style = {styles.image}
            //source = {require('../../images/test.png')}
            source = {{uri:this.state.testImage}}
            resizeMode = 'contain'
          />
        </View>
        <View style = {styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonDislike}>
            <Image
              style = {styles.buttonIcon}
              source = {require('../../images/thumb-down-icon.png')}
              resizeMode = 'contain'
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGo}>
            <Image
              style = {styles.buttonIcon}
              source = {require('../../images/car-icon.png')}
              resizeMode = 'contain'
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLike}>
            <Image
              style = {styles.buttonIcon}
              source = {require('../../images/heart-icon.png')}
              resizeMode = 'contain'
            />
          </TouchableOpacity>
        </View>
      </View>
    )

  }

}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff'
  },
  imageContainer:{
    height: '70%',
    marginRight:10,
    marginLeft:10,
    marginTop: '20%',
    marginBottom:'3%',
    borderRadius: 10,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#a5882b'
  },
  image:{
    flex: 1,
    borderRadius: 10,
    alignSelf: 'stretch',
    height: undefined,
    width: undefined,
  },
  buttonContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '20%',
    marginRight: '20%',
    marginBottom: '2%'
  },
  buttonLike:{
    backgroundColor:'rgba(255,200,200, 255)',
    borderRadius: 100,
    height: '80%',
    aspectRatio:1
  },
  buttonGo:{
    backgroundColor:'#00FF7F',
    borderRadius:100,
    height: '100%',
    aspectRatio:1,
    paddingBottom: '10%'
  },
  buttonDislike:{
    backgroundColor:'#F0E68C',
    borderRadius:100,
    height: '80%',
    aspectRatio:1
  },
  buttonIcon:{
    flex: 1,
    borderRadius: 10,
    marginTop:10,
    marginBottom:5,
    marginRight:5,
    marginLeft:5,
    alignSelf: 'stretch',
    height: undefined,
    width: undefined,
  }


})

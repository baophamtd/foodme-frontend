import React, {Component} from 'react';
import {StyleSheet, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import API from '../../utilities/api';
import Restaurant from '../../utilities/restaurant.object';


export default class ImageDisplayer extends Component{

  state = {
    currentRestaurantIndex: 0,
    currentPhotoIndex: 0,
    currentImage: require('../../images/loading-icon.png'),
    restaurants: []
  };

  componentDidMount(){
    API.searchRestaurants().then((res) =>{
      //console.log("here"+res.length)
      /*this.setState({
        restaurants: res,
      })*/
      setTimeout(function() { //Start the timer
        this.setState({
          restaurants: res,
        }) //After 3 second, set render to true
      }.bind(this), 3000)
    })
  };

  renderImageIndexes(){
    if(this.state.restaurants.length != 0){
      var indexSlots = [];
      for(let i = 0; i < this.state.restaurants[0].photos.length; i++){
        if(i == 0){
          indexSlots.push(
            <View style = {styles.roundedRectangleInitial}  key = {i}/>
          )
        }else{
          indexSlots.push(
            <View style = {styles.roundedRectangleNormal}  key = {i}/>
          )
        }
      }
      return (
        <View style = {styles.imageIndexHolder}>
          {indexSlots}
        </View>
      )

    }
  }

  render(){
    return (
      <View style = {styles.container}>
        <View style = {styles.imageContainer}>
          <ImageBackground style = {styles.image}
            //source = {require('../../images/test.png')}
            source = {this.state.currentImage}
            resizeMode = 'contain'>
            {this.renderImageIndexes()};
          </ImageBackground>

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
    flex: 9,
    marginRight:10,
    marginLeft:10,
    marginTop: '20%',
    marginBottom:'3%',
    borderRadius: 10,
    alignItems: 'center',
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
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 30
  },
  buttonLike:{
    backgroundColor:'rgba(255,200,200, 255)',
    borderRadius: 100,
    flex:1,
    aspectRatio:1,
    marginLeft:20,
    marginRight:20
  },
  buttonGo:{
    backgroundColor:'#00FF7F',
    borderRadius:100,
    flex:1,
    aspectRatio:1,
    paddingBottom: '10%',
    marginLeft:20,
    marginRight:20
  },
  buttonDislike:{
    backgroundColor:'#F0E68C',
    borderRadius:100,
    flex:1,
    aspectRatio:1,
    marginLeft:20,
    marginRight:20
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
  },
  imageIndexHolder:{
    alignSelf: 'stretch',
    height: 5,
    borderRadius:10,
    position: 'relative',
    top: 5,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:10,
    marginLeft:10,
    alignItems: 'stretch'
  },
  roundedRectangleInitial: {
    flex:1,
    borderRadius:10,
    backgroundColor: 'white',
    marginLeft:1,
    marginRight:1
  },
  roundedRectangleNormal: {
    flex:1,
    borderRadius:10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginLeft:1,
    marginRight:1
  }


})

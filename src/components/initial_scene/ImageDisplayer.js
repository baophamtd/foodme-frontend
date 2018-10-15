import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { BlurView } from 'react-native-blur';
import API from '../../utilities/api';
import Restaurant from '../../utilities/restaurant.object';


export default class ImageDisplayer extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentRestaurantIndex: 0,
      currentImageIndex: 0,
      currentImage: require('../../images/loading-icon.png'),
      currentRestaurantName: '',
      currentRestaurantType: '',
      restaurants: []
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position =>{
      API.searchRestaurants(position.coords.latitude, position.coords.longitude)
      .then((res) =>{
        this.setState({
          restaurants: res,
          currentImage: {uri:res[0].photos[0]}
        })
      })
    })
  };

  //render the image index on top of the image deck
  renderImageIndexes(){
    if(this.state.restaurants.length != 0){
      var indexSlots = [];
      for(let i = 0; i < this.state.restaurants[this.state.currentRestaurantIndex].photos.length; i++){
        if(i == this.state.currentImageIndex){
          indexSlots.push(
            <View style = {styles.roundedRectangleInitial}  key = {i}/>
          )
        }else{
          indexSlots.push(
            <View style = {styles.roundedRectangleNormal}  key = {i}/>
          )
        }
      }
      this.state.currentRestaurantName = this.state.restaurants[this.state.currentRestaurantIndex].name;
      return (
        <View style = {styles.imageIndexContainer}>
          {indexSlots}
        </View>
      )

    }
  }

  //go to next image
  nextImage(){
    if(this.state.currentImageIndex < this.state.restaurants[this.state.currentRestaurantIndex].photos.length -1){
      this.setState({
        currentImageIndex: this.state.currentImageIndex + 1,
      }, this.updateImage)
    }
  }

  //go to next image
  previousImage(){
    if(this.state.currentImageIndex > 0){
      this.setState({
        currentImageIndex: this.state.currentImageIndex - 1,
      }, this.updateImage)
    }

  }

  //show next restaurants
  nextRestaurant(){
    this.setState({
      currentRestaurantIndex: this.state.currentRestaurantIndex + 1,
      currentImageIndex:0
    }, this.updateImage)
  }

  updateImage(){
    //console.log(this.state.currentRestaurantIndex);
    //console.log(this.state.restaurants[this.state.currentRestaurantIndex].name);
    this.setState({
      currentImage: {uri:this.state.restaurants[this.state.currentRestaurantIndex].photos[this.state.currentImageIndex]}
    })
  }

  render(){
    return (
      <View style = {styles.container}>
        <View style = {styles.imageContainer}>
          <ImageBackground style = {styles.image}
            source = {this.state.currentImage}
            resizeMode = 'contain'>
            {this.renderImageIndexes()};
            <View style = {styles.imageButtonControllerContainer}>
              <TouchableOpacity
                style = {styles.imageControllerButton}
                onPress = {()=>this.previousImage()}/>
              <TouchableOpacity
                style={styles.imageControllerButton}
                onPress = {()=>this.nextImage()}/>
            </View>
            <Text style = {styles.restaurantName}>
              {this.state.currentRestaurantName}
            </Text>
          </ImageBackground>

        </View>


        <View style = {styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonDislike}
            onPress = {()=>this.nextRestaurant()}>
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
          <TouchableOpacity style={styles.buttonLike}
          onPress = {()=>this.nextRestaurant()}>
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
    //borderRadius: 10,
    alignSelf: 'stretch',
    height: undefined,
    width: undefined,
  },
  restaurantName: {
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'white',
    position: "absolute",
    bottom: 0,
    paddingLeft: 5,
  },
  buttonContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
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
    marginTop:12,
    marginBottom:12,
    marginRight:5,
    marginLeft:5,
    alignSelf: 'stretch',
    height: undefined,
    width: undefined,
  },
  imageIndexContainer:{
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
  },
  imageButtonControllerContainer: {
    flex:1,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  imageControllerButton:{
    flex:1,
    backgroundColor: 'transparent',
  }


})

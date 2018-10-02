import React, {Component} from 'react';
import {StyleSheet, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import API from '../../utilities/api';
import Restaurant from '../../utilities/restaurant.object';


export default class ImageDisplayer extends Component{

  state = {
    currentRestaurantIndex: 0,
    currentImageIndex: 0,
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
          currentImage: {uri:res[0].photos[0]}
        }) //After 3 second, set render to true
      }.bind(this), 2000)
    })
  };

  //render the image index on top of the image deck
  renderImageIndexes(){
    if(this.state.restaurants.length != 0){
      var indexSlots = [];
      for(let i = 0; i < this.state.restaurants[this.state.currentRestaurantIndex].photos.length; i++){
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
        currentImage: {uri:this.state.restaurants[this.state.currentRestaurantIndex].photos[this.state.currentImageIndex]}
      })
    }
    //console.log('Next'+this.state.currentImageIndex);
  }

  //go to next image
  previousImage(){
    if(this.state.currentImageIndex > 0){
      this.setState({
        currentImageIndex: this.state.currentImageIndex - 1,
        currentImage: {uri:this.state.restaurants[this.state.currentRestaurantIndex].photos[this.state.currentImageIndex]}
      })
    }

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

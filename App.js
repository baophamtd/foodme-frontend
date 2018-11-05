import React from 'react';
import API from './src/utilities/api';

import { AsyncStorage, StyleSheet, Text, View, Dimensions, Image, ImageBackground, Animated, PanResponder, TouchableOpacity } from 'react-native';
import ImageDisplayer from './src/components/initial_scene/ImageDisplayer';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
import Icon from 'react-native-vector-icons/Ionicons'
const Users = [
  { id: "1", uri: require('./assets/1.jpg') },
  { id: "2", uri: require('./assets/2.jpg') },
  { id: "3", uri: require('./assets/6.jpg') },
  { id: "4", uri: require('./assets/4.jpg') },
  { id: "5", uri: require('./assets/5.jpg') },
]

export default class App extends React.Component {

  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      userID: '',
      currentRestaurantIndex: 0,
      currentImageIndex: 0,
      currentImage: require('./src/images/loading-icon.png'),
      currentRestaurantName: '',
      currentRestaurantType: '',
      currentRestaurantPrice: '',
      currentRestaurantDistance: '',
      restaurants: []
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.nextRestaurant();

          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.nextRestaurant();

          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })

  }
  componentDidMount() {
    //look for id if it has been set. Else ping server to create new one
    AsyncStorage.getItem("id")
    .then(value =>{
      let id;
      if(value == null){
        console.log("NO VALUE");
        API.createUser()
        .then(result =>{
          id = result.id;
          AsyncStorage.setItem("id", id);
        })
      }else{
        id = value;
        console.log(value);
        //AsyncStorage.removeItem("id");
      }

      this.setState({
        userID: id,
      })
    });

    navigator.geolocation.getCurrentPosition(position =>{
      API.searchRestaurants(position.coords.latitude, position.coords.longitude)
      .then((res) =>{
        this.setState({
          restaurants: res,
          currentImage: {uri:res[0].photos[0]}
        })
      })
    })
  }

  //show next restaurants
  nextRestaurant(action){
    navigator.geolocation.getCurrentPosition(position =>{
      API.takeAction(position.coords.latitude, position.coords.longitude, this.state.userID, this.state.restaurants[this.state.currentRestaurantIndex].id, this.state.restaurants[this.state.currentRestaurantIndex].distance, action);
    })

    this.setState({
      currentRestaurantIndex: this.state.currentRestaurantIndex + 1,
      currentImageIndex:0,
      //currentImage: {uri:this.state.restaurants[this.state.currentRestaurantIndex].photos[this.state.currentImageIndex]}
    }, this.updateImage(), this.position.setValue({ x: 0, y: 0 }));

  }

  updateImage(){
    console.log(this.state.currentRestaurantIndex);
    this.setState({
      currentImage: {uri:this.state.restaurants[this.state.currentRestaurantIndex].photos[this.state.currentImageIndex]}
    })
  }

  renderHeader(){

  }

  //render the image index on top of the image deck
  renderImageIndexes(){
    //console.log("THIS IS CALLED");
    if(this.state.restaurants.length != 0){
      var indexSlots = [];
      let maxSizeImageDeck = this.state.restaurants[this.state.currentRestaurantIndex].photos.length;
      if(maxSizeImageDeck > 10) maxSizeImageDeck = 10;
      for(let i = 0; i < maxSizeImageDeck; i++){
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
      this.state.currentRestaurantPrice = '';
      if(this.state.restaurants[this.state.currentRestaurantIndex].price == 0){
        this.state.currentRestaurantPrice = "$";
      }else{
        for (let i = 0; i < this.state.restaurants[this.state.currentRestaurantIndex].price; i++) {
          this.state.currentRestaurantPrice = this.state.currentRestaurantPrice + "$";
        }
      }

      this.state.currentRestaurantDistance =  this.state.restaurants[this.state.currentRestaurantIndex].distance.duration.text;

      return (
        <View style = {styles.imageIndexContainer}>
          {indexSlots}
        </View>
      )

    }
  }

  renderFooter(){
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonController}
          onPress = {()=>this.nextRestaurant('dislike')}>
          <Image
            style = {styles.buttonIcon}
            source = {require('./src/images/previous-icon2.png')}
            //resizeMode = 'contain'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMain}
        onPress = {()=>this.nextRestaurant('like')}>
          <Image
            style = {styles.buttonIcon}
            source = {require('./src/images/heart-icon2.png')}
            //resizeMode = 'contain'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMain}>
          <Image
            style = {styles.buttonIcon}
            source = {require('./src/images/car-icon2.png')}
            //resizeMode = 'contain'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonController}
          onPress = {()=>this.nextRestaurant('dislike')}>
          <Image
            style = {styles.buttonIcon}
            source = {require('./src/images/next-icon2.png')}
            //resizeMode = 'contain'
          />
        </TouchableOpacity>
      </View>
    )
  }

  renderCurrentRestaurantImageDeck(){
    return(
      <ImageBackground style = {styles.imageContainer}
      source = {this.state.currentImage}
      blurRadius = {20}
      borderRadius = {10}>
        <ImageBackground style = {styles.image}
          source = {this.state.currentImage}
          resizeMode = 'contain'>
          {this.renderImageIndexes()};
        </ImageBackground>

      </ImageBackground>
    )
  }

  renderNextRestaurantImageDeck(){
    return(
      <ImageBackground style = {styles.imageContainer}
      source = {{uri:this.state.restaurants[this.state.currentRestaurantIndex+1].photos[0]}}
      blurRadius = {20}
      borderRadius = {10}>
        <ImageBackground style = {styles.image}
          source = {{uri:this.state.restaurants[this.state.currentRestaurantIndex+1].photos[0]}}
          resizeMode = 'contain'>
          {this.renderImageIndexes()};
        </ImageBackground>

      </ImageBackground>
    )
  }

  renderPreviousRestaurantImageDeck(){
    return(
      <ImageBackground style = {styles.imageContainer}
      source = {{uri:this.state.restaurants[this.state.currentRestaurantIndex-1].photos[0]}}
      blurRadius = {20}
      borderRadius = {10}>
        <ImageBackground style = {styles.image}
          source = {{uri:this.state.restaurants[this.state.currentRestaurantIndex-1].photos[0]}}
          resizeMode = 'contain'>
          {this.renderImageIndexes()};
        </ImageBackground>

      </ImageBackground>
    )
  }

  renderImageDeck(){

    return this.state.restaurants.map((item, i) => {

      if (i < this.state.currentImageIndex) {
        return null;
      }
      else if (i == this.state.currentImageIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - SCREEN_HEIGHT/4.5, width: SCREEN_WIDTH, padding: 10, position: 'absolute'}]}>
            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-10deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={styles.nextPreviousText}>NEXT</Text>

            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '10deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={styles.nextPreviousText}>PREVIOUS</Text>

            </Animated.View>
            {this.renderCurrentRestaurantImageDeck()}
            {/*
            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.uri} />
              */}

          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT - SCREEN_HEIGHT/4.5, width: SCREEN_WIDTH, padding: 10, position: 'absolute',
            }]}>
            <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={styles.nextPreviousText}>LIKE</Text>

            </Animated.View>

            <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

            </Animated.View>

              {this.renderNextRestaurantImageDeck()}
          </Animated.View>
        )
      }
    }).reverse()
  }

  render() {
    return (

      <View style={{ flex: 1 , backgroundColor: '#efede6'}}>
        <View style={{ flex: 1 }}>

        </View>
        <View style={{ flex: 7 }}>
        {this.renderImageDeck()}
        </View>

        {this.renderFooter()}


      </View>

      //<ImageDisplayer/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextPreviousText:{
    borderWidth: 1,
    borderColor: 'darkorange',
    color: 'darkorange',
    fontSize: 32,
    fontWeight: '800',
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer:{
    flex: 0.7,
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    //marginTop: 50,
    marginBottom: 25,
  },
  buttonMain:{
    borderRadius: 100,
    flex:1,
    //alignSelf: 'stretch',
    marginLeft:15,
    marginRight:15,
    aspectRatio:1
  },
  buttonController:{
    borderRadius: 100,
    flex:0.8,
    marginLeft:15,
    marginRight:15,
    marginTop:5,
    //marginBottom:10,
    aspectRatio:1
  },
  buttonIcon:{
    flex: 1,
    height: undefined,
    width: undefined,
  },
  imageContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    flex: 1,
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
});

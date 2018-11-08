import React from 'react';
import API from './src/utilities/api';

import { AsyncStorage, StyleSheet, Text, View, Dimensions, Image, ImageBackground, Animated, PanResponder, TouchableOpacity, Button } from 'react-native';
import ImageDisplayer from './src/components/initial_scene/ImageDisplayer';
import Swiper from 'react-native-deck-swiper';

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

    this.state = {
      userID: '',
      currentRestaurantIndex: 0,
      currentImageIndex: 0,
      currentImage: require('./src/images/loading-icon.png'),
      currentRestaurantName: '',
      currentRestaurantType: '',
      currentRestaurantPrice: '',
      currentRestaurantDistance: '',
      firstRestaurant: true,
      restaurants: []
    }

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

/*
    navigator.geolocation.getCurrentPosition(position =>{
      API.searchRestaurants(position.coords.latitude, position.coords.longitude)
      .then((res) =>{
        this.setState({
          restaurants: res,
          currentImage: {uri:res[0].photos[0]}
        })
        //console.log(this.state.restaurants.length)
      })
    })
*/

    setTimeout(function () {
      navigator.geolocation.getCurrentPosition(position =>{
        API.searchRestaurants(position.coords.latitude, position.coords.longitude)
        .then((res) =>{
          this.setState({
            restaurants: res,
            currentImage: {uri:res[0].photos[0]}
          })
        })
      })
    }.bind(this), 1000);

  }

  //show next restaurants
  nextRestaurant(index, action){
    navigator.geolocation.getCurrentPosition(position =>{
      API.takeAction(position.coords.latitude, position.coords.longitude, this.state.userID, this.state.restaurants[this.state.currentRestaurantIndex].id, this.state.restaurants[this.state.currentRestaurantIndex].distance, action);
    })

    if(index < this.state.restaurants.length - 1){
      this.setState((state, props) => ({
        currentRestaurantIndex: index + 1,
        currentImageIndex:0,
        firstRestaurant: false,
      }));
    }
  }

  previousRestaurant(index){
    if(index == 1){
      this.setState((state, props) => ({
        currentRestaurantIndex: index - 1,
        currentImageIndex:0,
        firstRestaurant: true,
      }));
      console.log(this.state.firstRestaurant)
    }
  }

  renderHeader(){

  }

  //render the image index on top of the image deck
  renderImageIndexes(){
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
          onPress = {()=>{this.refs.deck.swipeLeft()}}>
          <Image
            style = {styles.buttonIcon}
            source = {require('./src/images/previous-icon2.png')}
            //resizeMode = 'contain'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMain}
        onPress = {()=>{}}>
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
          onPress = {()=>{this.refs.deck.swipeRight()}}>
          <Image
            style = {styles.buttonIcon}
            source = {require('./src/images/next-icon2.png')}
            //resizeMode = 'contain'
          />
        </TouchableOpacity>
      </View>
    )
  }

  nextImage(){
    console.log("CLICK");
    if(this.state.currentImageIndex < 10){
      this.setState({
        currentImageIndex: this.state.currentImageIndex + 1,
      }, this.updateImage);
      console.log(this.state.currentImageIndex)
    }
  }

  previousImage(){
    if(this.state.currentImageIndex > 0){
      this.setState((state, props) => ({
        currentImageIndex: this.state.currentImageIndex - 1,
      }, this.updateImage));
    }
  }

  updateImage(){
    this.setState({ state: this.state });
    console.log(this.state.currentImageIndex);
  }



  render() {
    if(this.state.restaurants.length === 0) return null;

    return (
      <View style={{ flex: 1 , backgroundColor: '#efede6', flexDirection: 'column'}}>
        <View style={{ flex: 1 ,backgroundColor: 'blue'}}>

        </View>
        <View style={{ flex: 8 , backgroundColor: 'red'}}>
          <Swiper
              ref="deck"
              cards={this.state.restaurants}
              renderCard={(card) => {
                return(
                  <ImageBackground
                    style = {styles.card}
                    source = {{uri:card.photos[this.state.currentImageIndex]}}
                    borderRadius = {20}
                  >
                  {this.renderImageIndexes()};
                  <View
                    style = {styles.imageControllerButtonContainer}
                  >
                    <TouchableOpacity
                      style = {styles.imageControllerButton}
                      onPress = {()=>this.previousImage()}/>
                    <TouchableOpacity
                      style = {styles.imageZoom}/>
                    <TouchableOpacity
                      style = {styles.imageControllerButton}
                      onPress = {()=>this.nextImage()}/>
                  </View>
                  {/*
                    <ImageBackground
                      style = {styles.image}
                      source = {{uri:card.photos[this.state.currentImageIndex]}}
                      resizeMode = 'cover'
                    >

                      {this.renderImageIndexes()};
                      <View
                        style = {styles.imageControllerButtonContainer}
                      >
                        <TouchableOpacity
                          style = {styles.imageControllerButton}
                          onPress = {()=>this.previousImage()}/>
                        <TouchableOpacity
                          style = {styles.imageZoom}/>
                        <TouchableOpacity
                          style = {styles.imageControllerButton}
                          onPress = {()=>this.nextImage()}/>
                      </View>

                    </ImageBackground>
                    */}
                  </ImageBackground>
                )
              }}
              onSwipedLeft={(cardIndex) => {
                this.previousRestaurant(cardIndex);
              }}
              onSwipedRight={(cardIndex) => {
                this.nextRestaurant(cardIndex);
              }}
              onSwipedAll={() => {console.log('onSwipedAll')}}
              cardIndex={0}
              backgroundColor={'#efede6'}
              showSecondCard = {true}
              stackSize= {2}
              disableLeftSwipe = {this.state.firstRestaurant}
              disableBottomSwipe = {true}
              goBackToPreviousCardOnSwipeLeft = {true}
              stackSeparation = {1}
              >
            </Swiper>
        </View>
        {this.renderFooter()}

      </View>
      //<ImageDisplayer/>

    );

  }
}

const styles = StyleSheet.create({
  restaurantDeck: {
    flex: 8,
    //backgroundColor: '#efede6',
    //margin: 10,
    top: 100,

  },
  card: {
    flex: 0.82,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#efede6",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: -30,
    marginLeft: -10,
    marginRight: -10,
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
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
    flex: 1,
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    //marginTop: 50,
    marginBottom: 10,
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
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius:20,
  },
  image:{
    flex: 1,
    alignSelf: 'stretch',
    height: undefined,
    width: undefined,
    borderRadius:20,
  },
  imageIndexContainer:{
    alignSelf: 'stretch',
    height: 3,
    borderRadius:10,
    position: 'relative',
    top: 5,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:15,
    marginLeft:15,
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
  imageControllerButtonContainer:{
    flex:1,
    backgroundColor: 'transparent',
    borderRadius: 20,
    flexDirection: 'row',
  },
  imageControllerButton:{
    flex:1,
    //backgroundColor: 'green',
    borderRadius: 10,
  },
  imageZoom:{
    flex:2,
    //backgroundColor: 'blue',
  }
});

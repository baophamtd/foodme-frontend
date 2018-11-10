import React from 'react';
import API from './src/utilities/api';

import { AsyncStorage, Modal, StyleSheet, Text, View, Dimensions, Image, ImageBackground, Animated, PanResponder, TouchableOpacity, Button } from 'react-native';
import ImageDisplayer from './src/components/initial_scene/ImageDisplayer';
import Swiper from 'react-native-deck-swiper';
import ImageViewer from 'react-native-image-zoom-viewer';



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
      currentImage: require('./src/images/loading-icon.png'),
      currentRestaurantName: '',
      currentRestaurantType: '',
      currentRestaurantPrice: '',
      currentRestaurantDistance: '',
      currentRestaurantImages:[],
      firstRestaurant: true,
      zoomingMode: false,
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
            currentImage: {uri:res[0].photos[0]},
            currentRestaurantImages: res[0].photos,
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
/*
    const { restaurants, currentRestaurantIndex } = this.state;
    this.setState({
      currentRestaurantIndex: index + 1,
      restaurants: [
        ...restaurants.slice(0, currentRestaurantIndex + 1), // if not familiar with this look for spread operator
        {
          ...restaurants[currentRestaurantIndex + 1],
          currentImageIndex: 0,
        },
        ...restaurants.slice(currentRestaurantIndex + 2, restaurants.length)
      ],
      firstRestaurant: false,
    });
*/
    if(index < this.state.restaurants.length - 1){
      const { restaurants, currentRestaurantIndex } = this.state;
      this.setState({
        currentRestaurantIndex: index + 1,
        restaurants: [
          ...restaurants.slice(0, currentRestaurantIndex + 1), // if not familiar with this look for spread operator
          {
            ...restaurants[currentRestaurantIndex + 1],
            currentImageIndex: 0,
          },
          ...restaurants.slice(currentRestaurantIndex + 2, restaurants.length)
        ],
        firstRestaurant: false,
      });
    }
  }

  previousRestaurant(index){
    const { restaurants, currentRestaurantIndex } = this.state;
    this.setState({
      currentRestaurantIndex: index - 1,
      restaurants: [
        ...restaurants.slice(0, currentRestaurantIndex-1), // if not familiar with this look for spread operator
        {
          ...restaurants[currentRestaurantIndex-1],
          currentImageIndex: 0,
        },
        ...restaurants.slice(currentRestaurantIndex, restaurants.length)
      ],
    });
    if(index == 1){
      this.setState((state, props) => ({
        firstRestaurant: true,
      }));
    }
  }

  renderHeader(){

  }

  switchToZoomView(show){
    this.setState((state, props) => ({
      zoomingMode: show,
    }));
  }

  updateZoomView(){
    if(this.state.currentRestaurantImages.length == 0) return null;
    return (
            <Modal
              visible={this.state.zoomingMode}
              transparent={true}
              >
                <ImageViewer
                imageUrls={this.state.currentRestaurantImages}
                flipThreshold={250}
                enableSwipeDown={true}
                index={this.state.restaurants[this.state.currentRestaurantIndex].currentImageIndex}
                onSwipeDown={() =>{
                  this.switchToZoomView(false);
                }}
                />
            </Modal>
        )
  }

  //render the image index on top of the image deck
  renderImageIndexes(cardIndex){
    if(this.state.restaurants.length != 0 && this.state.currentRestaurantIndex == cardIndex){
      var indexSlots = [];
      let maxSizeImageDeck = this.state.restaurants[this.state.currentRestaurantIndex].photos.length;
      if(maxSizeImageDeck > 10) maxSizeImageDeck = 10;
      for(let i = 0; i < maxSizeImageDeck; i++){
        if(i == this.state.restaurants[this.state.currentRestaurantIndex].currentImageIndex){
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

  renderButtons(){
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

  renderCard = (card, cardIndex) => {
    return(
      <ImageBackground
        style = {styles.card}
        source = {{uri:card.photos[card.currentImageIndex].url}}
        borderRadius = {20}
      >
      {this.renderImageIndexes(cardIndex)};
      <View
        style = {styles.imageControllerButtonContainer}
      >
        <TouchableOpacity
          style = {styles.imageControllerButton}
          onPress = {()=>this.previousImage()}/>
        <TouchableOpacity
          style = {styles.imageZoom}
          onPress = {()=>this.switchToZoomView(true)}/>
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
  }

  nextImage(){
    const { restaurants, currentRestaurantIndex } = this.state;
    if(restaurants[currentRestaurantIndex].currentImageIndex < 9){
      this.setState({
        restaurants: [
          ...restaurants.slice(0, currentRestaurantIndex), // if not familiar with this look for spread operator
          {
            ...restaurants[currentRestaurantIndex],
            currentImageIndex: restaurants[currentRestaurantIndex].currentImageIndex+1
          },
          ...restaurants.slice(currentRestaurantIndex+1, restaurants.length)
        ],
      });
    }
  }

  previousImage(){
    const { restaurants, currentRestaurantIndex } = this.state;
    if(restaurants[currentRestaurantIndex].currentImageIndex > 0){
      this.setState({
        restaurants: [
          ...restaurants.slice(0, currentRestaurantIndex), // if not familiar with this look for spread operator
          {
            ...restaurants[currentRestaurantIndex],
            currentImageIndex: restaurants[currentRestaurantIndex].currentImageIndex-1
          },
          ...restaurants.slice(currentRestaurantIndex+1, restaurants.length)
        ],
      });
    }
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
              renderCard={
                this.renderCard
              }
              onSwipedLeft={(cardIndex) => {
                this.previousRestaurant(cardIndex);
              }}
              onSwipedRight={(cardIndex) => {
                this.nextRestaurant(cardIndex);
              }}
              onSwipedAll={() => {console.log('onSwipedAll')}}
              onTapCard={() =>{}}
              cardIndex={this.state.currentRestaurantIndex}
              backgroundColor={'#efede6'}
              showSecondCard = {true}
              stackSize= {this.state.restaurants.length}
              disableLeftSwipe = {this.state.firstRestaurant}
              disableBottomSwipe = {true}
              goBackToPreviousCardOnSwipeLeft = {true}
              stackSeparation = {1}
              >
            </Swiper>
            {this.updateZoomView()}
        </View>
        {this.renderButtons()}

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
    flex: 0.845,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#efede6",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: -50,
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

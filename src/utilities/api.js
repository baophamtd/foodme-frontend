const querystring = require('querystring');
const moment = require('moment');
const Restaurant = require('./restaurant.object');
const WEATHER_API_KEY = 'a3a61defc8d1a149a9276e19249fd38d';
const END_POINT = 'http://52.53.213.165:3000';

var api = {
  async searchRestaurants (lat, lng){

    let query = {
      lat: lat,
      lng: lng,
      minPrice: 0,
      maxPrice: 3,
      radiusMiles: 5,
      maxWidth: 1000,
      maxHeight: 1000,
    };

    let url = END_POINT+`/api/restaurant/search?${querystring.stringify(query)}`;
    return fetch(url)
    .then(res => res.json())
    .then(responseJSON =>{
      let restaurants = responseJSON.map(restaurant => {
        let photos = restaurant.photos.map(photo =>{
          var endPoint = 'https://maps.googleapis.com/maps/api/place/photo?';
          let uri = {
                key: 'AIzaSyDMMHtsOh6B3rBgqu9Q1ZqsHntJfYiQ8NA',
                maxwidth: 1000,
                maxheight: 1000,
                photo_reference: photo.photo_reference
          };
          return `${endPoint}${querystring.stringify(uri)}`;
        })
        return new Restaurant({name:restaurant.name, id: restaurant.place_id, photos:photos, price: restaurant.price, distance: restaurant.distance});
      })
      return restaurants;
    })
  },

  async createUser(){
    let url = END_POINT+'/api/user/create';
    let payload = {};
    return fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'text/html,application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify(payload)})
      .then(result =>{
        return result.json();
      });

  },

  async takeAction(lat, lng, userID, restaurantID, distance, action){
    //console.log(moment().format('ddd-MMM-D-YYYY,h-mm-ss-a'));
    let timeStamp = moment().format('ddd-MMM-D-YYYY,h-m-s-a').split(',');
    let url = END_POINT+'/api/connection/action';
    let payload = {
      lat: lat,
      lng: lng,
      userID: userID,
      restaurantID: restaurantID,
      action: action,
      date: timeStamp[0],
      time: timeStamp [1],
      distance: JSON.stringify(distance),
    };
    console.log(querystring.stringify(payload));
    return fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'text/html',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify(payload)})
      .then(result =>{
        console.log(result);
      });
  }

};


module.exports = api;

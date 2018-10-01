import {FileSystem} from 'expo';
const querystring = require('querystring');
const Restaurant = require('./restaurant.object');

var api = {
  searchRestaurants(){
    var url = 'http://localhost:3000/api/restaurant/search?lat=37.410511&lng=-122.120715&minPrice=0&maxPrice=3&radiusMiles=5&maxHeight=100&maxWidth=100';
    return fetch(url).then((res) => res.json()).then((responseJSON) =>{
      //prepare query for getting photos from google
      //console.log(responseJSON[0].photos);
      let testImage = responseJSON[0].photos[8].photo_reference;

      var end_point = 'https://maps.googleapis.com/maps/api/place/photo?';
      let query = {
            key: 'AIzaSyDk3UsX_dUc_IXiWi_oRnemBEN38LFs3Ik',
            maxwidth: 1000,
            maxheight: 1000,
      };

      let restaurants = responseJSON.map(restaurant => {
        return new Restaurant({name:restaurant.name, id: restaurant.id, photos:restaurant.photos});
      })
      return restaurants;
      //return `${end_point}${querystring.stringify(query)}&photo_reference=${testImage}`;
      //const path = `${FileSystem.cacheDirectoty}$`
      /*
      for(let restaurantObj of responseJSON){
        if(restaurantObj.place_id !=null){
          parsed.placeid = restaurantObj.place_id;
          const url = end_point+queryString.stringify(parsed);
          console.log(url);
          //make request to each photo from response
          fetch(url).then((res) => res.json()).then((responseJSON) =>{
              console.log(responseJSON);
          })
        }
      }*/

    });
  }
};

module.exports = api;

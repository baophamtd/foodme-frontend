const querystring = require('querystring');
const Restaurant = require('./restaurant.object');

var api = {
  async searchRestaurants (lat, lng){
    let end_point = 'http://10.250.231.194:3000/api/restaurant/search?';

    let query = {
      lat: lat,
      lng: lng,
      minPrice: 0,
      maxPrice: 3,
      radiusMiles: 5,
      maxWidth: 1000,
      maxHeight: 1000,
    };

    let url = `${end_point}${querystring.stringify(query)}`;
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
        return new Restaurant({name:restaurant.name, id: restaurant.id, photos:photos});
      })
      return restaurants;
    })
  }


};




module.exports = api;

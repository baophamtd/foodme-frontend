class Restaurant {

  constructor({name,id,photos,price,distance}){
    this.photos = photos;
    this.id = id;
    this.name = name;
    this.price = price;
    this.distance = distance;
    this.currentImageIndex = 0;
  }
}

module.exports = Restaurant;

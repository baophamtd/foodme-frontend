class Restaurant {

  constructor({name, address, id, photos, price, distance, temperature, busy_hours}){
    this.photos = photos;
    this.id = id;
    this.name = name;
    this.address = address,
    this.price = price;
    this.distance = distance;
    this.temperature = temperature;
    this.busy_hours = busy_hours;
    this.currentImageIndex = 0;
  }
}

module.exports = Restaurant;

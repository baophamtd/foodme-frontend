class Restaurant {

  constructor({name, address, id, rating, category, photos, price, distance, temperature, busy_hours}){
    this.photos = photos;
    this.id = id;
    this.rating = rating;
    this.name = name;
    this.address = address,
    this.price = price;
    this.distance = distance;
    this.temperature = temperature;
    this.busy_hours = busy_hours;
    this.category = category;
    this.currentImageIndex = 0;
  }
}

module.exports = Restaurant;

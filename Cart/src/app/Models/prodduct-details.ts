export class ProdductDetails {
  product_id: number;
  name: string;
  rating: number;
  price: number;
  imageUrl: string;
  constructor(product_id, name, rating, price, imageUrl) {
    this.product_id = product_id;
    this.name = name;
    this.rating = rating;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

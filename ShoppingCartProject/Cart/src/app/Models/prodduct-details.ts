export class ProdductDetails {
  product_id: number;
  name: string;
  rating: number;
  price: number;
  imageUrl: string;
  quantity: number;
  basePrice: number;
  constructor(
    product_id,
    name,
    rating,
    price,
    imageUrl,
    quantity = 1,
    basePrice = 300
  ) {
    this.product_id = product_id;
    this.name = name;
    this.rating = rating;
    this.price = price;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
    this.basePrice = basePrice;
  }
}

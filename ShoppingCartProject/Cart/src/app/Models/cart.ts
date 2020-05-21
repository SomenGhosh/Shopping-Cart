export class Cart {
  product_id: number;
  quantity: number;
  price: number;
  basePrice = 300;
  constructor(product_id, quantity, price, basePrice = 300) {
    this.product_id = product_id;
    this.quantity = quantity;
    this.price = price;
    this.basePrice = basePrice;
  }
}

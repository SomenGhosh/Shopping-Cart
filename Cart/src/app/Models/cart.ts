export class Cart {
  product_id: any;
  quantity: number;
  price: number;
  constructor(product_id, quantity, price) {
    this.product_id = product_id;
    this.quantity = quantity;
    this.price = price;
  }
}

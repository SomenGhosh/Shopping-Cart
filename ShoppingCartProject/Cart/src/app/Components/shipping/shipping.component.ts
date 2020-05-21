import { Component, OnInit } from "@angular/core";
import { Cart } from "src/app/Models/cart";
import { ProdductDetails } from "src/app/Models/prodduct-details";
import { ProductListService } from "src/app/Services/product-list.service";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.scss"],
})
export class ShippingComponent implements OnInit {
  cartItems: Cart[] = [];
  cartProducts: ProdductDetails[] = [];
  total = 0;
  constructor(private cartService: ProductListService) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartDetails();
    this.storeDetails();
    console.log(this.cartProducts);
  }
  storeDetails() {
    for (const i of this.cartProducts) {
      this.cartItems.push(new Cart(i.product_id, i.quantity, i.price));
    }
  }
  getTotal() {
    this.total = 0;
    for (const i of this.cartItems) {
      this.total = this.total + i.price * i.quantity;
    }
    return this.total;
  }
  getValue(val: any, item: any) {
    for (let i of this.cartItems) {
      if (i.product_id === item.product_id) {
        i.quantity = val.target.value;
      }
    }
  }
}

import { ProductListService } from "./../../Services/product-list.service";
import { Cart } from "./../../Models/cart";
import { Component, OnInit, Input } from "@angular/core";
import { ProdductDetails } from "src/app/Models/prodduct-details";

@Component({
  selector: "app-cart-details",
  templateUrl: "./cart-details.component.html",
  styleUrls: ["./cart-details.component.scss"],
})
export class CartDetailsComponent implements OnInit {
  cartItems: Cart[] = [];
  cartProducts: ProdductDetails[] = [];
  total = 0;
  counter: number = 0;
  code: string = "";
  j = 0;
  constructor(private cartService: ProductListService) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartDetails();
    this.storeDetails();
  }
  storeDetails() {
    for (const i of this.cartProducts) {
      this.cartItems.push(new Cart(i.product_id, i.quantity, i.price));
    }
  }
  model(event: any, i: any) {
    for (let j of this.cartItems) {
      i.price = j.price = j.basePrice;
      if (j.product_id === i.product_id) {
        if (event.target.value === "Model2") {
          i.price = j.price + 30;
          j.price += 30;
        } else if (event.target.value === "Model3") {
          i.price = j.price + 90;
          j.price += 90;
        }
      }
    }
  }
  choice(enter: any) {
    if (enter.key === "Enter") {
      this.code = enter.target.value;
      if (this.code.toLowerCase() === "fifty") {
        this.counter = 1;
        for (let i of this.cartProducts) {
          i.price = i.price / 2;
          this.j = this.j + i.price * i.quantity;
        }
        console.log(this.cartProducts);
      }
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
        for (let j of this.cartProducts) {
          if (i.product_id === j.product_id) {
            j.quantity = i.quantity = val.target.value;
          }
        }
      }
    }
  }
}

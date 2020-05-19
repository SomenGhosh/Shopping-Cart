import { ProductListService } from "./../../Services/product-list.service";
import { Cart } from "./../../Models/cart";
import { Component, OnInit } from "@angular/core";
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
  constructor(private cartService: ProductListService) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartDetails();
    this.storeDetails();
  }
  storeDetails() {
    for (const i of this.cartProducts) {
      this.cartItems.push(new Cart(i.product_id, 1, i.price));
      console.log(this.cartItems);
    }
  }
  getTotal() {
    this.total = 0;
    for (const i of this.cartItems) {
      this.total = this.total + i.price * i.quantity;
    }
    return this.total;
  }
}

import { ProdductDetails } from "./../Models/prodduct-details";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductListService {
  cartArray: ProdductDetails[] = [];
  productItems: ProdductDetails[] = [];
  searchTerm: string;
  product: ProdductDetails[] = [
    new ProdductDetails(1, "Product-1", 3, 300, "../../../assets/product1.jpg"),
    new ProdductDetails(2, "Product-2", 3, 300, "../../../assets/product2.jpg"),
    new ProdductDetails(3, "Product-3", 3, 300, "../../../assets/product3.jpg"),
    new ProdductDetails(4, "Product-4", 3, 300, "../../../assets/product4.jpg"),
    new ProdductDetails(5, "Product-5", 3, 300, "../../../assets/product5.jpg"),
    new ProdductDetails(6, "Product-6", 3, 300, "../../../assets/product6.jpg"),
    new ProdductDetails(7, "Product-7", 3, 300, "../../../assets/product7.jpg"),
    new ProdductDetails(8, "Product-8", 3, 300, "../../../assets/product8.jpg"),
    new ProdductDetails(9, "Product-9", 3, 300, "../../../assets/product9.jpg"),
    new ProdductDetails(
      10,
      "Product-10",
      3,
      300,
      "../../../assets/product10.jpg"
    ),
    new ProdductDetails(
      11,
      "Product-11",
      3,
      300,
      "../../../assets/product11.jpg"
    ),
    new ProdductDetails(
      12,
      "Product-12",
      3,
      300,
      "../../../assets/product12.jpg"
    ),
  ];
  constructor() {}
  getproducts(searchterm: string): ProdductDetails[] {
    if (searchterm == null || searchterm == "") {
      return this.product;
    } else {
      this.productItems = [];
      for (const i of this.product) {
        if (i.name.toLowerCase().includes(searchterm.toLowerCase())) {
          this.productItems.push(i);
        }
      }
      return this.productItems;
    }
  }
  getdescription(product_id: number) {
    for (const i of this.product) {
      if (i.product_id === product_id) {
        return i;
      }
    }
  }
  addToCart(product_id: number) {
    for (const i of this.product) {
      if (i.product_id === product_id) {
        this.cartArray.push(i);
      }
    }
  }
  getCartDetails() {
    return this.cartArray;
  }
}

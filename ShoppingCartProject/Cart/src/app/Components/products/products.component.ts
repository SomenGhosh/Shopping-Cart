import { ProductListService } from "./../../Services/product-list.service";
import { Component, OnInit, Input } from "@angular/core";
import { ProdductDetails } from "src/app/Models/prodduct-details";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  items: number = 0;
  products: ProdductDetails[] = [];
  searchTerm: string = null;
  constructor(private productService: ProductListService) {}
  ngOnInit() {
    this.products = this.productService.getproducts(this.searchTerm);
  }
  // getTotalQuant() {
  //   this.items = this.productService.getQuant()
  // }
  search() {
    this.products = this.productService.getproducts(this.searchTerm);
  }
  addProduct(product_id: number) {
    this.productService.addToCart(product_id);
    this.items++;
  }
}

import { ProductListService } from "./../../Services/product-list.service";
import { Component, OnInit, Input } from "@angular/core";
import { ProdductDetails } from "src/app/Models/prodduct-details";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  products: ProdductDetails[] = [];
  searchTerm: string = null;
  constructor(private productService: ProductListService) {}
  ngOnInit() {
    this.products = this.productService.getproducts(this.searchTerm);
  }
  search() {
    this.products = this.productService.getproducts(this.searchTerm);
  }
  addProduct(product_id: number) {
    this.productService.addToCart(product_id);
  }
}

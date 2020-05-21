import { FormsModule } from "@angular/forms";
import { Cart } from "src/app/Models/cart";
import { ProductListService } from "./../../../Services/product-list.service";
import { ProdductDetails } from "src/app/Models/prodduct-details";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-description",
  templateUrl: "./product-description.component.html",
  styleUrls: ["./product-description.component.scss"],
})
export class ProductDescriptionComponent implements OnInit {
  cartItems: Cart[];
  products: ProdductDetails;
  product_id: number;
  sub: any;
  constructor(
    private productService: ProductListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.product_id = +params["product_id"];
    });
    this.products = this.productService.getdescription(this.product_id);
  }
  addProduct(product_id: number) {
    this.productService.addToCart(product_id);
  }
  model(event: any) {
    this.products.price = this.products.basePrice;
    if (event.target.value === "Model 2") {
      this.products.price += 30;
    } else if (event.target.value === "Model 3") {
      this.products.price += 90;
    }
  }
}

import { Cart } from "src/app/Models/cart";
import { ProductListService } from "src/app/Services/product-list.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  items: number;
  constructor(private service: ProductListService) {}

  ngOnInit(): void {}
  getCountTotal() {
    return this.service.returnCount();
  }
}

import { OrderPlacedComponent } from "./Components/order-placed/order-placed.component";
import { CartDetailsComponent } from "./Components/cart-details/cart-details.component";
import { PaymentComponent } from "./Components/payment/payment.component";
import { ShippingComponent } from "./Components/shipping/shipping.component";
import { CartComponent } from "./Components/cart/cart.component";
import { HomeComponent } from "./Components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDescriptionComponent } from "./Components/products/product-description/product-description.component";
import { componentFactoryName } from "@angular/compiler";
const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "product-description/:product_id",
    component: ProductDescriptionComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "cart",
    component: CartComponent,
    children: [
      {
        path: "cart-details",
        component: CartDetailsComponent,
      },
      {
        path: "shipping",
        component: ShippingComponent,
      },
      {
        path: "payment",
        component: PaymentComponent,
      },
    ],
  },
  {
    path: "order-placed",
    component: OrderPlacedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

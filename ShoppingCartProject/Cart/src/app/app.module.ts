import { ProductDescriptionComponent } from "./Components/products/product-description/product-description.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./Components/home/home.component";
import { NavBarComponent } from "./Components/nav-bar/nav-bar.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { ProductsComponent } from "./Components/products/products.component";
import { CartComponent } from "./Components/cart/cart.component";
import { ShippingComponent } from "./Components/shipping/shipping.component";
import { PaymentComponent } from "./Components/payment/payment.component";
import { CartDetailsComponent } from "./Components/cart-details/cart-details.component";
import { OrderPlacedComponent } from "./Components/order-placed/order-placed.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ProductsComponent,
    ProductDescriptionComponent,
    CartComponent,
    ShippingComponent,
    PaymentComponent,
    CartDetailsComponent,
    OrderPlacedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';

import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { LogoutComponent } from './logout/logout.component';
import { VisitRestaurantComponent } from './visit-restaurant/visit-restaurant.component';
import { CartComponent } from './cart/cart.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    FooterComponent,

    RegisterCustomerComponent,
    RegisterRestaurantComponent,

    LoginComponent,
    HomeComponent,
    AddFoodItemComponent,
    RestaurantMenuComponent,
    LogoutComponent,
    VisitRestaurantComponent,
    CartComponent,
    ViewOrderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

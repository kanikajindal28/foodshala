
import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';

import {RegisterCustomerComponent} from './register-customer/register-customer.component';
import {RegisterRestaurantComponent} from './register-restaurant/register-restaurant.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AddFoodItemComponent} from './add-food-item/add-food-item.component';
import {RestaurantMenuComponent} from './restaurant-menu/restaurant-menu.component';
import {LogoutComponent} from './logout/logout.component';
import {VisitRestaurantComponent} from './visit-restaurant/visit-restaurant.component';
import {CartComponent} from './cart/cart.component';
import {ViewOrderComponent} from './view-order/view-order.component';
import {AuthGuardService} from './auth-guard.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';



export const MAIN_ROUTES: Routes = [
  { path : '', redirectTo: '/index', pathMatch: 'full'},
  { path : 'index', component: IndexComponent},
  {
    path : 'authentication',
    component: HomeComponent,
    children: [
      { path : 'login', component: LoginComponent},
      { path : 'registerCustomer', component: RegisterCustomerComponent},
      { path : 'registerRestaurant', component: RegisterRestaurantComponent},
    ]
  },
  { path : 'restaurantMenu', component: RestaurantMenuComponent, canActivate: [AuthGuardService] },
  { path : 'addFoodItem', component: AddFoodItemComponent, canActivate: [AuthGuardService] },
  { path : 'visitRestaurant/:id', component: VisitRestaurantComponent },
  { path : 'cart', component: CartComponent, canActivate: [AuthGuardService]},
  { path : 'viewOrders', component: ViewOrderComponent, canActivate: [AuthGuardService]},
  { path : 'logout', component: LogoutComponent},
  {path: '**', component: PageNotFoundComponent}



];

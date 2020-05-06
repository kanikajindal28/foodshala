import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RestaurantService} from '../restaurant.service';
import {AuthenticationService} from '../authentication.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-visit-restaurant',
  templateUrl: './visit-restaurant.component.html',
  styleUrls: ['./visit-restaurant.component.scss']
})
export class VisitRestaurantComponent implements OnInit {

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService, private loginService: AuthenticationService,
              private cartService: CartService) { }
  restaurantId: any;
  private allFoodOfRestaurant;
  private role;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.restaurantId = id;
      console.log(this.restaurantId);
      this.role = sessionStorage.getItem('role');
    });

    this.restaurantService.getAllFoodItemsOfRestaurants(this.restaurantId).subscribe(data => {
      this.allFoodOfRestaurant = data;
      console.log(this.allFoodOfRestaurant);
    });
  }

  orderFood(foodId: any) {
    if (this.loginService.isUserLoggedIn()) {
      this.cartService.addToCart(foodId).subscribe((data) =>
        console.log(data));
      alert('Product added to cart.');
    } else {
      alert('Please Login First');
    }
  }

}

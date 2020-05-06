import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../restaurant.service';
import {Restaurant} from '../Restaurant';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {



  constructor(private restaurantService: RestaurantService, private router: Router, private loginService: AuthenticationService,
              private cartService: CartService) { }

  private role;
  private allFood;
  ngOnInit() {
    // this.restaurantService.getAllRestaurants().subscribe(data => {
    //   this.allRestaurants = data;
    //   console.log(data);
    // });
    this.restaurantService.getAllFoodItems().subscribe(data => {
      this.allFood = data;
    });
    this.role = sessionStorage.getItem('role');
  }

  addToCart(id) {
    if (this.loginService.isUserLoggedIn()) {
      this.cartService.addToCart(id).subscribe((data) =>
        console.log(data));
      alert('Product added to cart.');
    } else {
      alert('Please Login First');
    }
  }
  seeMenu(restaurantId: number) {
    this.router.navigate(['visitRestaurant', restaurantId]);
  }
}

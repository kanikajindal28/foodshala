import { Component, OnInit } from '@angular/core';
import {MenuService} from '../menu.service';
import {RestaurantService} from '../restaurant.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  private allFood;
  constructor(private menuService: MenuService, private restaurantService: RestaurantService) { }

  ngOnInit() {
    // this.menuService.getMyMenu().subscribe(data => {
    //   this.allFoodItems = data;
    // });

    this.restaurantService.myRestarauntFood().subscribe(data => {
      this.allFood = data;
      console.log(this.allFood);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../MenuItem';
import {RestaurantService} from '../restaurant.service';
import {Router} from '@angular/router';
import {MenuService} from '../menu.service';

@Component({
  selector: 'app-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.scss']
})
export class AddFoodItemComponent implements OnInit {

  // tslint:disable-next-line:new-parens
  private menuItem: MenuItem = new class implements MenuItem {
    foodId: number;
    foodItem: string;
    type: string;
    price: number;
    image: string;
  }
  // selectedFile: File = null;
  constructor(private restaurantService: RestaurantService, private router: Router, private menuService: MenuService) { }
  ngOnInit() {

  }

  addFoodItem() {
    console.log(this.menuItem);
    if (this.menuItem.foodItem != null && this.menuItem.type != null && this.menuItem.price != null) {
        this.menuService.addFoodItem(this.menuItem).subscribe(data => {
          alert('New Product Added Successfully');
          this.router.navigate(['restaurantMenu']);
        });
    } else {
      alert('Please fill all the details.');
    }
  }

}

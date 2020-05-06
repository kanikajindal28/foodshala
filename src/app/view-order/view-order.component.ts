import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../restaurant.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  constructor(private restaurantService: RestaurantService) { }
  private myOrders;
  ngOnInit() {
    this.restaurantService.getMyOrders().subscribe(data => {
      this.myOrders = data;
    });
  }

}

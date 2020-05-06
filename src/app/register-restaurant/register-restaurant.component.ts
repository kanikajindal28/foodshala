import { Component, OnInit } from '@angular/core';
import {Customer} from '../Customer';
import {FormControl, Validators} from '@angular/forms';
import {Restaurant} from '../Restaurant';
import {RegistrationService} from '../registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.scss']
})
export class RegisterRestaurantComponent implements OnInit {

  constructor(private register: RegistrationService, private router: Router ) { }
  // tslint:disable-next-line:new-parens
  private restaurant: Restaurant = new class implements Restaurant {
    restaurantId: number;
    restaurantName: string;
    email: string;
    password: string;
    mobileNo: string;
    active: true;
    role: string;
  };

  private emailref = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  mobPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  ngOnInit() {
  }
  addRestaurant() {
    if (this.restaurant.restaurantName != null && this.restaurant.email != null && this.restaurant.password != null
      && this.restaurant.mobileNo != null) {
      this.register.addRestaurant(this.restaurant).subscribe(data => {
        alert('Restaurant added successfully.');
        this.router.navigate(['authentication/login']);
      });
    } else {
      alert('Please fill all the details.');
    }
  }

}

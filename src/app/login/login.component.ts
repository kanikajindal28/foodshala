import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {RestaurantService} from '../restaurant.service';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;
  role: any;

  constructor(private router: Router, private loginservice: AuthenticationService, private restrauntService: RestaurantService,
              private customerService: CustomerService) {
  }

  ngOnInit() {
  }

  checkLoginCustomer() {

    this.loginservice.authenticateCustomer(this.username, this.password).subscribe(data => {
      console.log(data);

      this.invalidLogin = false;
      if (!this.invalidLogin) {
        this.restrauntService.checkLogin(this.username).subscribe(data2 => {
          this.role = data2;
          sessionStorage.setItem('role', this.role);
          console.log(data2);
          if (this.role === 'customer') {
            // if logged in user is customer
            this.router.navigate(['index']);
          } else {
            // if logged in user is restaurant owner
            this.router.navigate(['restaurantMenu']);
          }
        });
      }
      }, error => {
        this.invalidLogin = true;
        this.checkLoginRestaurant();
        if (this.invalidLogin) {
          alert('Invalid username or password. Please try again.');
          location.reload();
        }
      }
    );
  }

  checkLoginRestaurant() {
      this.loginservice.authenticateRestaurant(this.username, this.password).subscribe(data => {
          this.router.navigate(['index']);
          this.invalidLogin = false;
        }, error => {
          this.invalidLogin = true;
        }
      );
   }
}

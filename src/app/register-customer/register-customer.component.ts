import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {RegistrationService} from '../registration.service';
import {Router} from '@angular/router';
import {Customer} from '../Customer';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.scss']
})
export class RegisterCustomerComponent implements OnInit {

  constructor(private register: RegistrationService, private router: Router ) { }

  // tslint:disable-next-line:new-parens
  private customer: Customer = new class implements Customer {
    customerId: number;
    name: string;
    email: string;
    password: string;
    mobileNo: string;
    gender: string;
    preference: string;
    active: boolean;
    role: string;
  };
  private emailref = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  mobPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  ngOnInit() {
  }
  createUser() {
    if (this.customer.name != null && this.customer.email != null && this.customer.password != null && this.customer.mobileNo != null
      && this.customer.gender != null ) {
      this.register.createCustomer(this.customer).subscribe(data => {
        alert('User created successfully.');
        this.router.navigate(['authentication/login']);
      });
    } else {
      alert('Please fill all the details.');
    }
  }

}

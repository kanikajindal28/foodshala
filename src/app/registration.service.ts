import { Injectable } from '@angular/core';
import {Customer} from './Customer';
import {HttpClient} from '@angular/common/http';
import {Restaurant} from './Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient ) {}
  private url = 'http://localhost:2020';

  createCustomer(customer: Customer) {
    return this.http.post(this.url + '/addCustomer', customer);
  }
  addRestaurant(restautant: Restaurant) {
    return this.http.post(this.url + '/addRestaurant', restautant);
  }
}

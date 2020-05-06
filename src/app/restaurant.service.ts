import { Injectable } from '@angular/core';
import {MenuItem} from './MenuItem';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:2020';

  checkLogin(username: string) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    // username = sessionStorage.getItem('username');
    // console.log(this.http.get(this.url + '/getRole/' + username, {headers}));
    return this.http.get(this.url + '/getRole/' + username, {headers});
  }

  getMyMenu() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/getMyMenu', {headers});
  }

  getAllRestaurants() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/getAllRestaurants', {headers});
  }

  getAllFoodItems() {
    // const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/getAllFoodItems');
  }

  getAllFoodItemsOfRestaurants(id: any) {
    return this.http.get(this.url + '/getAllFoodItemsOfRestaurants/' + id);
  }

  myRestarauntFood() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/getMyRestaurantsFood', {headers});
  }

  getMyOrders() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/getMyOrders', {headers});
  }
}

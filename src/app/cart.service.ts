import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:2020';

  addToCart(id: number) {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/addToCart/' + id, {headers});
  }

  showMyCart() {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/showCart', {headers});
  }

  removeOne(id: number) {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/removeOneFromCart/' + id, {headers});
  }

  removeWholeProduct(id) {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/removeFromCart/' + id, {headers});
  }

  // showOrderHistory() {
  //   const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
  //   return this.http.get(this.url + '/checkout', {headers});
  //
  // }

  checkout() {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/checkout', {headers});
  }
}

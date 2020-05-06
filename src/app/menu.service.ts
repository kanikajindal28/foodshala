import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MenuItem} from './MenuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  constructor(private http: HttpClient) { }
  private url = 'http://localhost:2020';

  getMyMenu() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/getMyMenu', {headers});
  }

  addFoodItem(menuItem: MenuItem) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post(this.url + '/addMenuItem', menuItem, {headers});
  }
}

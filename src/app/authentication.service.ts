import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegistrationService} from './registration.service';
import {Customer} from './Customer';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private registrationService: RegistrationService) { }

  currentUser: Customer;
  public restaurantOwner: boolean;

  result: any;


  // authenticate(username, password) {
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   return this.http.get('http://localhost:2020/validateCustomerLogin' || 'http://localhost:2020/validateRestaurantLogin', {headers}).pipe(
  //     map(
  //       userData => {
  //         sessionStorage.setItem('username', username);
  //         const authString = 'Basic ' + btoa(username + ':' + password);
  //         sessionStorage.setItem('basicAuth', authString);
  //         return userData;
  //       }
  //     )
  //   );
  // }

  authenticateCustomer(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get('http://localhost:2020/validateCustomerLogin', {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          const authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicAuth', authString);
          return userData;
        }
      )
    );
  }

  authenticateRestaurant(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get('http://localhost:2020/validateRestaurantLogin', {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          const authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicAuth', authString);
          return userData;
        }
      )
    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('basicAuth');
    sessionStorage.removeItem('role');
  }


}

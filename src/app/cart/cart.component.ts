import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) { }

  private total = 0;
  private length = 0;
  private myProducts;
  ngOnInit() {
    this.cartService.showMyCart().subscribe((data) => {
      this.myProducts = data;
      // console.log(this.myProducts);
      this.length = this.myProducts.length;
      let sum = 0;
      for ( let i = 0; i < this.length; i++) {
        sum = sum + Number(this.myProducts[i].menuItem.price) * Number(this.myProducts[i].quantity);
      }
      this.total = sum;
    });
  }

  removeOneQuantity(id) {
    this.cartService.removeOne(id).subscribe(data1 => {
      this.cartService.showMyCart().subscribe(data => {
        this.myProducts = data;
        this.length = this.myProducts.length;
        let sum = 0;
        for ( let i = 0; i < this.length; i++) {
          sum = sum + Number(this.myProducts[i].products.price) * Number(this.myProducts[i].quantity);
        }
        this.total = sum;
      });
    });

  }
  addOneQuantity(id) {
    this.cartService.addToCart(id).subscribe(data1 => {
      this.cartService.showMyCart().subscribe(data => {
        this.myProducts = data;
        this.length = this.myProducts.length;
        let sum = 0;
        for ( let i = 0; i < this.length; i++) {
          sum = sum + Number(this.myProducts[i].products.price) * Number(this.myProducts[i].quantity);
        }
        this.total = sum;
      });
    });
  }

  removeProduct(id) {
    this.cartService.removeWholeProduct(id).subscribe(data1 => {
      this.cartService.showMyCart().subscribe(data => {
        this.myProducts = data;
        this.length = this.myProducts.length;
        let sum = 0;
        for ( let i = 0; i < this.length; i++) {
          sum = sum + Number(this.myProducts[i].products.price) * Number(this.myProducts[i].quantity);
        }
        this.total = sum;
      });
    });
  }

  checkOut() {
    this.cartService.checkout().subscribe(data => {
      alert('Your order has been placed successfully. Thanks for ordering.');
      this.router.navigate(['index']);
    });
  }

}

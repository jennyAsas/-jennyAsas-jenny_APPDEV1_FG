import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from './products/products';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Products, Cart],
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <app-products (addToCart)="onAddToCart($event)"></app-products>
      <app-cart [cartItems]="cart"></app-cart>
    </div>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Blackyreidz Shop';
  cart: any[] = [];

  onAddToCart(product: any) {
    this.cart.push(product);
  }
}

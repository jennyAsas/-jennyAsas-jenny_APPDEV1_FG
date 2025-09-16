import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class Cart {
  @Input() cartItems: any[] = [];

  get totalPrice() {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}

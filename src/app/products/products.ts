import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  price: number;
  details: string;
  stock: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class Products {
  @Output() addToCart = new EventEmitter<Product>();

  searchTerm: string = '';

  products: Product[] = [
    { name: 'Brown Hoodie', price: 1200, details: 'Comfy cotton hoodie.', stock: 5 },
    { name: 'Denim Jacket', price: 2000, details: 'Classic blue denim.', stock: 3 },
    { name: 'White T-Shirt', price: 500, details: 'Soft cotton shirt.', stock: 0 },
    { name: 'Black Joggers', price: 1500, details: 'Slim fit joggers.', stock: 2 },
    { name: 'Leather Jacket', price: 3500, details: 'Stylish and durable.', stock: 1 },
  ];

  get filteredProducts() {
    return this.products.filter((p) =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }

  add(product: Product) {
    if (product.stock > 0) {
      this.addToCart.emit(product);
      product.stock--;
    }
  }
}

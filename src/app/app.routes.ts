import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Products } from './products/products';

const routes: Routes = [
  { path: '', component: Products },
  { path: 'cart', component: Cart },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

import { Routes } from '@angular/router';

export const CART_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/cart.component').then((m) => m.CartComponent)
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./pages/checkout.component').then((m) => m.CheckoutComponent)
  }
];

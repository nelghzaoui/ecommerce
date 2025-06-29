import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./features/product/product.routes').then((m) => m.routes)
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.routes').then((m) => m.routes)
  },
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  }
];

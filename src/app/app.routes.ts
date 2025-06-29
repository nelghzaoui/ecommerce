import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./features/product/product.routes').then((m) => m.PRODUCT_ROUTES)
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.routes').then((m) => m.CART_ROUTES)
  },
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  }
];

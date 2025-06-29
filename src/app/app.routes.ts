import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./features/product/product.routes').then((m) => m.routes)
  },
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  }
];

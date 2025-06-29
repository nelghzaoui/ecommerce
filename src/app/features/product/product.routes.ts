import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/overview.component').then(
        (m) => m.ProductOverviewComponent
      )
  },
  {
    path: ':slug',
    loadComponent: () =>
      import('./pages/detail.component').then((m) => m.ProductDetailComponent)
  }
];

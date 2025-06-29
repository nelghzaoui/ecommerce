import { Routes } from '@angular/router';
import { ProductOverviewComponent } from './components/overview.component';
import { ProductDetailComponent } from './components/detail.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductOverviewComponent
  },
  {
    path: ':slug',
    component: ProductDetailComponent
  }
];

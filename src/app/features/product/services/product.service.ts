import { Injectable } from '@angular/core';
import { Product } from '../models/product.class';
import { MOCK_PRODUCTS } from '../data/mock-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAll(): Product[] {
    return MOCK_PRODUCTS;
  }

  getBySlug(slug: string): Product | undefined {
    return MOCK_PRODUCTS.find((p) => p.slug === slug);
  }
}

import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.class';
import { MOCK_PRODUCTS } from '../data/mock-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _products = signal<Product[]>(MOCK_PRODUCTS);

  getAll() {
    return this._products;
  }

  getBySlug(slug: string): Product | undefined {
    return MOCK_PRODUCTS.find((p) => p.slug === slug);
  }
}

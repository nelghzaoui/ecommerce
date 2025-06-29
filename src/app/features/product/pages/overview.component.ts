import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.class';
import { CartService } from '../../cart/services/cart.service';
import { ProductCardComponent } from '../../../shared/ui/product-card.component';

@Component({
  template: `
    <div class="max-w-6xl mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-6 text-gray-800">Nos produits</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (product of products(); track product.id) {
          <tx-product-card [product]="product" />
        }
      </div>
    </div>
  `,
  imports: [ProductCardComponent]
})
export class ProductOverviewComponent {
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);
  readonly products = this.productService.getAll();

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}

import { Component, computed, inject, signal } from '@angular/core';
import { ProductCardComponent } from '@shared/ui/product-card.component';
import { InfiniteScrollDirective } from '@shared/directives/infinite-scroll.directive';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.class';
import { CartService } from '../../cart/services/cart.service';

@Component({
  template: `
    <div class="max-w-6xl mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-6 text-gray-800">Nos produits</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (product of visibleProducts(); track product.id) {
          <tx-product-card [product]="product" (add)="addToCart(product)" />
        }
      </div>

      @if (visibleProducts().length < products().length) {
        <div infiniteScroll (reached)="loadMore()" class="h-1"></div>
      }
    </div>
  `,
  imports: [ProductCardComponent, InfiniteScrollDirective]
})
export class ProductOverviewComponent {
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);

  readonly products = this.productService.getAll();
  private readonly visibleCount = signal(12); // visibles au départ
  readonly visibleProducts = computed(() =>
    this.products().slice(0, this.visibleCount())
  );

  loadMore() {
    const next = this.visibleCount() + 12;
    this.visibleCount.set(Math.min(next, this.products().length));
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}

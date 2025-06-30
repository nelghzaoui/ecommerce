import { Component, computed, effect, inject, signal } from '@angular/core';
import { ProductCardComponent } from '@shared/ui/product-card.component';
import { InfiniteScrollDirective } from '@shared/directives/infinite-scroll.directive';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.class';
import { CartService } from '../../cart/services/cart.service';

@Component({
  template: `
    <div class="max-w-6xl mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-6 text-gray-800">Nos produits</h1>

      <div class="mb-4 flex flex-wrap gap-4">
        <select (change)="onCategoryChange($event)" class="form-select">
          <option value="">Toutes les catégories</option>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
          <option value="livres">Livres</option>
          <option value="accessoires">Accessoires</option>
        </select>

        <input
          type="range"
          min="0"
          max="100"
          [value]="maxPrice() ?? 100"
          (input)="onMaxPriceChange($event)"
          class="w-48"
        />
        <span>Prix max : {{ maxPrice() ?? '∞' }}€</span>

        <p class="text-sm text-gray-600">
          @if (selectedCategory()) {
            Filtré par : {{ selectedCategory() }}
          }
          @if (maxPrice() !== 100) {
            – Prix max : {{ maxPrice() }}€
          }
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (product of visibleProducts(); track product.id) {
          <tx-product-card [product]="product" (add)="addToCart(product)" />
        } @empty {
          <div class="text-center text-gray-500 py-10">
            Aucun produit ne correspond à vos critères.
          </div>
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
  /* Filters */
  readonly selectedCategory = signal<string | null>(null);
  readonly maxPrice = signal<number | null>(null);
  readonly filteredProducts = computed(() =>
    this.productService.filterProducts(
      this.products(),
      this.selectedCategory(),
      this.maxPrice()
    )
  );
  /* Infinite Scroll */
  private readonly visibleCount = signal(12);
  readonly visibleProducts = computed(() =>
    this.filteredProducts().slice(0, this.visibleCount())
  );

  constructor() {
    effect(() => {
      const _ = [this.selectedCategory(), this.maxPrice()];
      this.visibleCount.set(12);
    });
  }

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    const value = target?.value || null;
    this.selectedCategory.set(value || null);
  }

  onMaxPriceChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value, 10);
    this.maxPrice.set(isNaN(value) ? null : value);
  }

  loadMore() {
    const next = this.visibleCount() + 12;
    this.visibleCount.set(Math.min(next, this.products().length));
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}

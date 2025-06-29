import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../features/cart/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tx-navbar',
  imports: [RouterLink],
  template: `
    <nav class="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div
        class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between"
      >
        <a routerLink="/" class="text-xl font-bold text-gray-800">MyShop</a>

        <ul class="flex items-center gap-6 text-sm font-medium text-gray-700">
          <li>
            <a
              routerLink="/products"
              routerLinkActive="text-primary"
              class="hover:text-primary transition"
            >
              Produits
            </a>
          </li>
          <li>
            <a
              routerLink="/cart"
              class="relative hover:text-primary transition"
            >
              Panier
              @if (itemCount() > 0) {
                <span
                  class="absolute -top-2 -right-3 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                  >{{ itemCount() }}</span
                >
              }
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  private readonly cartService = inject(CartService);

  readonly itemCount = computed(() =>
    this.cartService.items().reduce((sum, item) => sum + item.quantity, 0)
  );
}

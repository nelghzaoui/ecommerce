import { Component, computed, inject } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  template: `
    <div class="max-w-4xl mx-auto px-4 py-8">
      <div class="flex justify-between items-baseline">
        <h1 class="text-2xl font-bold mb-6 text-gray-800">Votre panier</h1>

        <button (click)="clear()" class="text-sm text-red-500 hover:underline">
          Vider le panier
        </button>
      </div>

      <div class="space-y-6">
        @for (item of items(); track item.productId) {
          <div class="flex items-center gap-4 border-b pb-4">
            <img
              [src]="item.image"
              [alt]="item.name"
              class="w-24 h-24 object-cover rounded"
            />

            <div class="flex-1">
              <h2 class="text-lg font-semibold">{{ item.name }}</h2>
              <p class="text-primary font-bold">{{ item.price }} €</p>

              <div class="flex items-center mt-2 gap-2">
                <label
                  for="qty-{{ item.productId }}"
                  class="text-sm text-gray-600"
                  >Quantité :</label
                >
                <input
                  type="number"
                  min="1"
                  [value]="item.quantity"
                  (change)="updateQuantity($event, item.productId)"
                  class="w-16 px-2 py-1 border rounded text-sm"
                  id="qty-{{ item.productId }}"
                />
                <button
                  (click)="remove(item.productId)"
                  class="ml-auto text-sm text-red-500 hover:underline"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        }

        <div class="text-right pt-6 border-t">
          <p class="text-xl font-bold">Total : {{ total() }} €</p>
        </div>
      </div>
    </div>
  `
})
export class CartComponent {
  private cartService = inject(CartService);
  readonly items = this.cartService.items;

  readonly total = computed(() =>
    this.items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  updateQuantity(event: Event, productId: string) {
    const input = event.target as HTMLInputElement;
    const quantity = Number(input.value);
    if (quantity > 0) this.cartService.setQuantity(productId, quantity);
  }

  remove(productId: string) {
    this.cartService.removeFromCart(productId);
  }

  clear() {
    const confirmClear = confirm('Voulez-vous vraiment vider votre panier ?');
    if (confirmClear) this.cartService.removeAll();
  }
}

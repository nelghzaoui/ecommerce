import { Component, computed, inject } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  template: `<div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">
      Validation de commande
    </h1>

    @if (items().length > 0) {
      <div class="space-y-4">
        @for (item of items(); track item.productId) {
          <div class="flex justify-between text-sm border-b pb-2">
            <span>{{ item.name }} × {{ item.quantity }}</span>
            <span>{{ item.price * item.quantity }} €</span>
          </div>
        }

        <div class="text-right pt-4 border-t mt-4">
          <p class="text-lg font-bold">Total : {{ total() }} €</p>
        </div>

        <div class="mt-8 border-t pt-4">
          <p class="text-gray-600 text-sm mb-2">
            Informations client (à venir)
          </p>
          <input
            type="text"
            placeholder="Nom complet"
            class="w-full mb-2 px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full mb-4 px-4 py-2 border rounded"
          />
          <button
            class="w-full bg-blue-600 text-white py-2 rounded hover:bg-primary/90 transition"
          >
            Valider la commande
          </button>
        </div>
      </div>
    } @else {
      <p class="text-gray-500 text-center py-12">Votre panier est vide.</p>
    }
  </div> `
})
export class CheckoutComponent {
  private cartService = inject(CartService);
  readonly items = this.cartService.items;

  readonly total = computed(() =>
    this.items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
}

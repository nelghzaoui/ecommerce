import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../features/product/models/product.class';

@Component({
  selector: 'tx-product-card',
  template: `
    @if (product(); as product) {
      <div
        class="block border rounded-lg p-4 shadow-sm hover:shadow-md transition"
      >
        <img
          [src]="product.image"
          [alt]="product.name"
          class="w-full h-48 object-cover rounded mb-4"
        />
        <a [routerLink]="['/products', product.slug]" class="">
          <h2 class="text-lg font-semibold">{{ product.name }}</h2>
        </a>
        <p class="text-primary font-bold mt-2">{{ product.price }} €</p>

        <button
          class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-primary/90 transition"
          (click)="add.emit(product)"
        >
          Ajouter au panier
        </button>
      </div>
    }
  `,
  imports: [RouterLink]
})
export class ProductCardComponent {
  product = input<Product>();
  add = output<Product>();
}

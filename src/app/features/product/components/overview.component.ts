import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { RouterLink } from '@angular/router';
import { Product } from '../models/product.class';
import { CartService } from '../../cart/services/cart.service';

@Component({
  imports: [RouterLink],
  template: `
    <div class="max-w-6xl mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-6 text-gray-800">Nos produits</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (product of products(); track product.id) {
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
              (click)="addToCart(product)"
            >
              Ajouter au panier
            </button>
          </div>
        }
      </div>
    </div>
  `
})
export class ProductOverviewComponent {
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);
  readonly products = this.productService.getAll();

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}

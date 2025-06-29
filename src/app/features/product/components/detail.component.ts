import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.class';
import { CartService } from '../../cart/services/cart.service';

@Component({
  template: `
    <div class="max-w-4xl mx-auto px-4 py-8">
      @if (product(); as product) {
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            [src]="product.image"
            [alt]="product.name"
            class="w-full h-auto rounded-lg shadow-md object-cover"
          />

          <div>
            <h1 class="text-3xl font-bold text-gray-800 mb-2">
              {{ product.name }}
            </h1>
            <p class="text-gray-600 text-sm mb-4">
              {{ product.category }}
            </p>
            <p class="text-xl font-semibold text-primary mb-4">
              {{ product.price }} €
            </p>

            <div class="text-gray-700 mb-6">
              <p>{{ product.description }}</p>
            </div>

            <button
              class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-primary/90 transition"
              (click)="addToCart(product)"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      } @else {
        <div class="text-center py-20 text-gray-500">Produit introuvable.</div>
      }
    </div>
  `,
  styles: [``]
})
export class ProductDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);

  private slug = signal(this.route.snapshot.paramMap.get('slug') ?? '');
  readonly product = computed(() => this.productService.getBySlug(this.slug()));

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}

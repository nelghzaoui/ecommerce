import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../features/product/models/product.class';
import { ButtonComponent } from './button.component';
import { CardComponent } from './card.component';

@Component({
  selector: 'tx-product-card',
  template: `
    @if (product(); as product) {
      <tx-card>
        <img
          [src]="product.image"
          [alt]="product.name"
          class="w-full h-48 object-cover rounded mb-4"
        />
        <a [routerLink]="['/products', product.slug]" class="">
          <h2 class="text-lg font-semibold">{{ product.name }}</h2>
        </a>
        <p class="text-primary font-bold mt-2">{{ product.price }} €</p>

        <tx-button
          [label]="'Ajouter au panier'"
          [color]="'primary'"
          [isFull]="true"
          (clicked)="add.emit(product)"
        />
      </tx-card>
    }
  `,
  imports: [RouterLink, ButtonComponent, CardComponent]
})
export class ProductCardComponent {
  product = input<Product>();
  add = output<Product>();
}

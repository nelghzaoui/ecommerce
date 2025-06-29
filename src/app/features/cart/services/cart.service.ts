import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../../product/models/product.class';
import { CartItem } from '../models/cart.interface';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _items = signal<CartItem[]>(this.load());

  readonly items = computed(() => this._items());

  addToCart(product: Product) {
    const newItem = product.toCartItem();

    const current = this._items();
    const existing = current.find((i) => i.productId === product.id);

    const updated = existing
      ? current.map((i) =>
          i.productId === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      : [...current, newItem];

    this._items.set(updated);
    this.save(updated);
  }

  removeFromCart(productId: string) {
    const updated = this._items().filter((p) => p.productId !== productId);
    this._items.set(updated);
    this.save(updated);
  }

  private save(items: CartItem[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }

  private load(): CartItem[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
}

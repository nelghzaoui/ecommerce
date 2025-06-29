import { CartItem } from '../../cart/models/cart.interface';

export class Product {
  constructor(
    public id: string,
    public name: string,
    public slug: string,
    public description: string,
    public price: number,
    public image: string,
    public category: string,
    public stock: number,
    public rating: number = 0,
    public tags?: string[],
    public variants?: {
      size?: string[];
      color?: string[];
    }
  ) {}

  isAvailable(): boolean {
    return this.stock > 0;
  }

  getFormattedPrice(): string {
    return this.price.toFixed(2) + ' €';
  }

  getImageOrPlaceholder(): string {
    return this.image || '/assets/placeholder.png';
  }

  toCartItem(): CartItem {
    return {
      productId: this.id,
      name: this.name,
      price: this.price,
      image: this.image,
      quantity: 1
    };
  }
}

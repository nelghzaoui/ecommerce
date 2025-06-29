export interface Cart {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

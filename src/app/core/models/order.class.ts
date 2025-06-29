import { Cart } from '../../features/cart/models/cart.interface';
import { User } from './user.interface';

export class Order {
  constructor(
    public userData: User,
    public cart: Cart,
    public date: Date,
    public status: Status
  ) {}
}

type Status = 'Ordered' | 'On going' | 'On Delivery';

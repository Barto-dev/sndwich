import { computed, map } from 'nanostores';
import type { CartItem, ShopItem } from '../types';

export const cart = map<Record<number, CartItem>>({});

export const addItemToCart = (item: ShopItem) => {
  const cartItem = cart.get()[item.id];
  const quantity = cartItem ? cartItem.quantity : 0;
  cart.setKey(item.id, {
    item,
    quantity: quantity + 1,
  });
}

export const removeItemFromCart = (itemId: number) => {
  // @ts-ignore
  cart.setKey(itemId, undefined);
}

export const subtotal = computed(cart, (cart) => {
  return Object.values(cart).reduce((acc, cartItem) => {
    return acc + (cartItem.item.price * cartItem.quantity);
  }, 0);
});

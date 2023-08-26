/** @jsxImportSource react */

import React from 'react';
import type { ShopItem } from '../types';
import { addItemToCart } from '../stores/cart';

interface AddToCartProps {
  item: ShopItem;
}

const AddToCart = ({
  item
}: AddToCartProps) => {
  return (
    <button className="big-link" onClick={() => addItemToCart(item)}>Add To Cart</button>
  );
};

export default AddToCart;

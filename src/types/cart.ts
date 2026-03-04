// Shopping cart type definitions

import { ID } from './common';

export interface CartItem {
  id: ID;
  courseId: ID;
  title: string;
  thumbnail: string;
  instructor: string;
  price: number;
  discountPrice?: number;
  addedAt: Date | string;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  discount: number;
  total: number;
  couponCode?: string;
  couponDiscount?: number;
}

export interface CartAction {
  type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'CLEAR_CART' | 'APPLY_COUPON' | 'REMOVE_COUPON';
  payload?: CartItem | ID | string;
}

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minPurchase?: number;
  maxDiscount?: number;
  expiresAt: Date | string;
  isActive: boolean;
}

export interface CheckoutData {
  items: CartItem[];
  paymentMethod: 'credit_card' | 'bank_transfer' | 'momo' | 'zalopay';
  couponCode?: string;
  total: number;
}

'use client'
import { create } from 'zustand'
import type { Product } from './mock-data'

type CartItem = Product & { quantity: number; size: string }
type CartState = { items: CartItem[]; add: (product: Product, size: string) => void; remove: (id: string) => void; update: (id: string, quantity: number) => void; clear: () => void }
export const useCart = create<CartState>((set) => ({
  items: [],
  add: (product, size) => set((state) => { const existing = state.items.find((item) => item.id === product.id && item.size === size); return { items: existing ? state.items.map((item) => item.id === product.id && item.size === size ? { ...item, quantity: item.quantity + 1 } : item) : [...state.items, { ...product, size, quantity: 1 }] } }),
  remove: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  update: (id, quantity) => set((state) => ({ items: quantity < 1 ? state.items.filter((item) => item.id !== id) : state.items.map((item) => item.id === id ? { ...item, quantity } : item) })),
  clear: () => set({ items: [] }),
}))
export const cartTotal = (items: CartItem[]) => items.reduce((sum, item) => sum + item.price * item.quantity, 0)
export type { CartItem }


import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addToCard(product: Product) {
    const existingProduct = this.items.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.count! += 1;
    } else {
      this.items.push({ ...product, count: 1 });
    }
  }
  
  deleteToCard(product: Product) {
    const existingProduct = this.items.find((item) => item.id === product.id);
    if (existingProduct) {
      if (existingProduct.count! > 1) {
        existingProduct.count! -= 1;
      } else {
        this.items = this.items.filter((item) => {
          item.inCart = false;
          item.id !== product.id;
        });
      }
    }
  }

  getItems() {
    return this.items;
  }
  
  clearCart() {
    this.items = [];
    return this.items;
  }

  getProductCount(productId: number): number {
    const product = this.items.find(item => item.id === productId);
    return product ? product.count! : 0;
  }
}

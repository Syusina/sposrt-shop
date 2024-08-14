import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  products = [];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCard(product);
  }

  deleteFromCart(product: Product) {
    this.cartService.deleteToCard(product);
  }

  getCartItems() {
    return this.cartService.getItems();
  }

  getAllItems() {
    return this.cartService.getItems().map((el) => el.count).reduce((acc, current) => acc + current, 0);
  }

  getAllPrice() {
    return this.cartService.getItems().map((el) => el.price* el.count).reduce((acc, current) => acc + current, 0);
  }

  getProductCount(productId: number): number {
    return this.cartService.getProductCount(productId);
  }
}

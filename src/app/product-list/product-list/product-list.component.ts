import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product, products } from 'src/app/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  constructor(private cartService: CartService) {}
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addToCart(product: Product) {
    this.cartService.addToCard(product);
    window.alert('Your product has been added to the cart!');
  }
}

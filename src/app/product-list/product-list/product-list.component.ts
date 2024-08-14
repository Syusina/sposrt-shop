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

  like(product: Product) {
    product.like = !product.like;
  }

  addToCart(product: Product) {
    this.cartService.addToCard(product);
    product.inCart = true;
  }
}

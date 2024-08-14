import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  images = ['./assets/item/item1.png', './assets/item/item2.png', './assets/item/item3.png', './assets/item/item4.png', './assets/item/item5.png', './assets/item/item6.png']
  mainImg = './assets/item/item1.png';

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCard(product);
    product.inCart = true;
  }

  choiseImg(img: string) {
    this.mainImg = img;
  }

}

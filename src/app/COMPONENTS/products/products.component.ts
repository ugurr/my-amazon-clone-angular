import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../SERVICE/shopping-cart.service';
import {AlertifyService} from "../../SERVICE/alertify.service"
import { Product } from './product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input()
  products: Product[] = [];
 constructor(private shopping_cart: ShoppingCartService,
             private alertifyService:AlertifyService
            ) { }

  ngOnInit(): void {
    console.log(this.products.length);
  }
  addToCart(product: Product) {
    this.shopping_cart.addProduct(product); 
     this.alertifyService.success('<strong>"'+product.title+'"</strong> added to cart');

  }

}

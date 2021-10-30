import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/COMPONENTS/products/product';
import { ShoppingCartService } from '../../SERVICE/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items!: Product[];
  
  constructor(public shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }


  getShoppingCart(){
   this.items =  this.shopping_cart.get_shopping_cart_items();
  }

  deleteEventHandler(p:Product): void{
    this.getShoppingCart()
  }
}
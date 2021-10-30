import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertifyService } from 'src/app/SERVICE/alertify.service';
import { ShoppingCartService } from 'src/app/SERVICE/shopping-cart.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {
  @Input()
  checkout_products!: Product[];

   @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(public shopping_cart_service: ShoppingCartService,private alertifyService:AlertifyService) { }

  ngOnInit(): void {
    console.log('products ', this.checkout_products)
  }

  removeItem(p: Product){
    this.shopping_cart_service.removerItem(p)
    this.deleteEvent.emit(p)
    this.alertifyService.delete('<strong>"'+p.title+'"</strong> removed from cart');
  }

}

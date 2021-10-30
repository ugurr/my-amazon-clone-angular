import { Injectable } from '@angular/core';
import { Product } from '../COMPONENTS/products/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
shopping_cart_items:Product[]=[];
  constructor() { }

  addProduct = (product: Product) => {
    let items=this.get_shopping_cart_items();
    if(items){
      items.push(product)   
      localStorage.setItem("shopping_cart", JSON.stringify(items));

    }
    else{
      this.shopping_cart_items.push(product);
      localStorage.setItem("shopping_cart", JSON.stringify(this.shopping_cart_items));
    }
  }

  get_shopping_cart_items=()=>{
   let items = localStorage.getItem('shopping_cart')!
   return JSON.parse(items);
  }

  getCartLength=()=>{
    let items=this.get_shopping_cart_items();
    var cnt=items  ? items.length:0;
    return  cnt;
  }
  getTotal = ()=>{
    let items = this.get_shopping_cart_items();
    return items?.reduce((acc: any, item: { price: any; })=> acc+ item.price, 0)

  }
  removerItem=(p: { id: any; })=>{
    let items = this.get_shopping_cart_items();
    
    const index = items.findIndex((item: { id: any; })=> item.id == p.id);
    if(index>=0){
      items.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(items))
    }

  }
}

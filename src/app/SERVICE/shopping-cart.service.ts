import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
shopping_cart_items:any[]=[];
  constructor() { }

  addProduct = (product: any) => {
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
    return items?.reduce((acc: any, item: { Price: any; })=> acc+ item.Price, 0)

  }
  removerItem=(p: { id: any; })=>{
    console.log('calling remover ', p)
    let items = this.get_shopping_cart_items();
    
    const index = items.findIndex((item: { id: any; })=> item.id == p.id);
    if(index>=0){
      console.log('hitting if')
      items.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(items))
    }

  }
}

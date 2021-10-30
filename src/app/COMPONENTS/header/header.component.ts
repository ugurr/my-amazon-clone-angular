import { Component, Input, OnInit } from '@angular/core';
import { AutService } from 'src/app/SERVICE/aut.service';
import { ShoppingCartService } from '../../SERVICE/shopping-cart.service';

 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  filterText:string="";

  constructor(public shoppingCart:ShoppingCartService,
    public auth :AutService
    ) { }

  ngOnInit(): void {
  }

  getQueryParam() {
    var  queryParam = {};
    queryParam['search'] = this.filterText;
    return queryParam;
  }

  signOut() {
    this.auth.logout()

    }
}

import { Component, OnInit } from '@angular/core';
import { AutService } from 'src/app/SERVICE/aut.service';
import { ShoppingCartService } from '../../SERVICE/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCart:ShoppingCartService,
    public auth :AutService
    ) { }

  ngOnInit(): void {
  }
  signOut() {
    this.auth.logout()

    }
}

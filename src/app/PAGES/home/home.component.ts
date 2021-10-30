import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/COMPONENTS/products/product';
import { ApiService } from 'src/app/SERVICE/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Product[] = [];

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.getProducts(params["search"]);});
  }
  getProducts(filterText: string) {
    this.api.getJson()
      .subscribe(resp => {
        if (resp.length > 0 && filterText) {
          this.items = resp.filter(x => x.title.toLowerCase().indexOf(filterText.toLowerCase()) > -1) as Product[];
        } else {
          this.items = resp;
        }
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICE/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api :ApiService) { }

  ngOnInit(): void {
    this.getProducts()

  }
getProducts(){
  this.api.getJson().subscribe(resp=>{
    console.log('resp',resp);
    console.log('hello world')
  })
}
}

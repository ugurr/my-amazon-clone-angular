import { Component, Input, OnInit } from '@angular/core';
// import { ApiService } from 'src/app/SERVICE/api.service';
import { ProductService } from 'src/app/SERVICE/product.service';
import { Product } from 'src/models/product';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // items!: any[];
  modelProducts: Array<Product>;
  _hubConnection: HubConnection | undefined;
  private _connectionId: string | undefined;
  public get connectionId(): string | undefined {
    return this._connectionId;
  }
  public set connectionId(value: string | undefined) {
    this._connectionId = value;
  }
  signalRServiceIp: string = "https://localhost:44327/productHub";

  constructor(private productService: ProductService) {

    this.modelProducts = new Array<Product>();
  }

  ngOnInit(): void {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(this.signalRServiceIp, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    this._hubConnection.start().then(
      () => console.log("Hub Connection Start"))
      .catch(err => console.log(err));

    this._hubConnection.on('GetConnectionId', (connectionId: string) => {
      this._connectionId = connectionId;
      console.log("ConnectionID :" + connectionId);
      this.productService.GetProduct(connectionId).then(res => {
        this.modelProducts = res;
      });
    });

    this._hubConnection.on('ChangeProduct', (product: Product) => {
      //console.log("Updated Game:" + JSON.stringify(game));
      //console.log("Game Data Push:"+JSON.stringify(this.modelGames));
      var item = this.modelProducts.find(rd => rd.Name == product.Name);
      //console.log("Current Game:" + JSON.stringify(item));
      this.modelProducts = this.modelProducts.filter(gam => gam != item);
      this.modelProducts.push(product);
      //console.log("Row Data Push:" + JSON.stringify(this.modelGames));
    });
  }
  getProducts() {
    // this.api.getJson().subscribe(resp => {      
    //   this.items = resp;
    // });
  }

}

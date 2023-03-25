import { Component } from '@angular/core';
import { CurrencyApiDataService } from './service/CurrencyApiDataService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CurrencyExchange';
  // currjson: any = [];

  // amount: any = [];
  // base = 'USD';
  // count2 = 'BTC';
  // result: number = 0;

  // constructor(private cADService: CurrencyApiDataService) { }


  // amounts(c: string) {
  //   this.amount = c;
  //   console.log(this.amount)

  // }

  // changebase(a: string) {
  //   this.base = a;
  //   console.log(this.base)
  // }

  // tocountry(b: string) {
  //   this.count2 = b;
  //   console.log(this.count2);
  // }


  // convert() {
  //   this.cADService.getCurrencyData(this.base).subscribe(data => {
  //     // console.log(data);
  //     this.currjson = JSON.stringify(data);
  //     this.currjson = JSON.parse(this.currjson);
  //     this.amount = JSON.parse(this.amount);
  //     console.log(this.currjson, this.amount);

  //     if (this.count2 === 'USD') {
  //       this.result = this.currjson.rates.USD * (this.amount);
  //       console.log(this.result);
  //     } else if (this.count2 === 'BTC') {
  //       this.result = this.currjson.rates.BTC * (this.amount);
  //       console.log(this.result);
  //     } else if (this.count2 === 'GBP') {
  //       this.result = this.currjson.rates.GBP * (this.amount);
  //       console.log(this.result);
  //     } else if (this.count2 === 'EUR') {
  //       this.result = this.currjson.rates.EUR * (this.amount);
  //       console.log(this.result);
  //     } else if (this.count2 === 'CNY') {
  //       this.result = this.currjson.rates.CNY * (this.amount);
  //       console.log(this.result);
  //     }
  //   })

  // }
}

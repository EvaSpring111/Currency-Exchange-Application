import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environment/environment.prod';
@Injectable({
  providedIn: 'root'
})

export class CurrencyApiDataService {

  constructor( private http: HttpClient ) { }

  getCurrencyData(country1: any){
    let url = `${environment.exchangeRatesAPIUrl}${country1}`;
    return this.http.get(url);
    
  }

  getTodatRate(){
    let this_url = `${environment.todayRate}`;
    return this.http.get(this_url)
  }
}

import { Component, OnInit } from '@angular/core';
import { CurrencyApiDataService } from 'src/app/service/CurrencyApiDataService.service';
import { CourseToday } from 'src/app/model/headers.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  courseToday: CourseToday[] = [];
  courseToUSD: CourseToday[] = [];
  courseToUSD2: number = 0;
  courseToEUR: number = 0;
  currentDate = new Date();

  constructor(private cADService: CurrencyApiDataService) { }

  ngOnInit(): void {
    this.getTodayRate()
  }

  getTodayRate() {
    this.cADService.getTodatRate().subscribe(items => {
      this.courseToday = JSON.parse(JSON.stringify(items));
      // console.log(this.courseToday);
      this.courseToUSD = this.courseToday.filter((item: any) => item.cc === 'USD');
      // console.log(this.courseToUSD);
      this.courseToUSD2 = +this.courseToUSD.map((x: any) => x.rate).join('');
      this.courseToEUR = +this.courseToday.filter((item: any) => item.cc === 'EUR').map((x: any) => x.rate).join('');
      // console.log(this.courseToUSD2);
      // console.log(this.courseToEUR);
    })
  }
}

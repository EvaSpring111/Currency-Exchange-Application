import { Component, forwardRef , Input} from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators, ControlValueAccessor } from '@angular/forms';
import { Currency } from 'src/app/model/currency.interface';
import { CurrencyRates } from 'src/app/model/currencyRates.inteface';

import { CurrencyApiDataService } from 'src/app/service/CurrencyApiDataService.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ConverterComponent),
      multi: true,
    },
  ],
  styleUrls: ['./converter.component.css']
})

export class ConverterComponent implements ControlValueAccessor {

  @Input() currencyFROM: string = 'USD';
  @Input() currencyTO: string = 'USD';

  private amounts: number = 0;
  currjson:  CurrencyRates = {} as CurrencyRates;

  result: number = 0;
  // currencyFROM: string = '';
  // amounts: number = 0;
  // currencyTO: string = '';

  constructor(private cADService: CurrencyApiDataService) { }


  form = new FormGroup({
    currencyFROM: new FormControl('', Validators.required,),
    currencyTO: new FormControl('', Validators.required,),
    amounts: new FormControl(0, [
      Validators.required,
    ]),
    result: new FormControl(0, [
      Validators.required,
    ]),
  });

  get value() {
    return this.amounts;
  }

  set value(newValue: number) {
    this.amounts = newValue;
    this.onChange(newValue);
    this.onTouched();
  }

  onChange = (value: number) => {};
  onTouched = () => {};

  writeValue(value: number): void {
    this.amounts = value;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInput(value: number) {
    const newValue = value;
    if (isNaN(newValue)) {
      this.value = 0;
    } else {
      this.value = newValue;
    }
  }

  amounting(amounts: number) {
    this.amounts = amounts;
  }

  onSubmits() {
    this.cADService.getCurrencyData(this.form.value.currencyFROM).subscribe(data => {
      // console.log( 'first', this.currjson);
      this.currjson = JSON.parse(JSON.stringify(data));
      // console.log('data', data);
      // console.log( 'last', this.currjson);

      if (this.form.value.currencyTO === 'USD') {
        this.form.value.result = this.currjson.rates.USD * (this.form.value.amounts!);
        // console.log(this.form.value.result);
      } else if (this.form.value.currencyTO === 'BTC') {
        this.form.value.result = this.currjson.rates.BTC * (this.form.value.amounts!);
        // console.log(this.form.value.result);
      } else if (this.form.value.currencyTO === 'GBR') {
        this.form.value.result = this.currjson.rates.GBP * (this.form.value.amounts!);
        // console.log(this.form.value.result);
      } else if (this.form.value.currencyTO === 'EUR') {
        this.form.value.result = this.currjson.rates.EUR * (this.form.value.amounts!);
        // console.log(this.form.value.result);
      } else if (this.form.value.currencyTO === 'CNY') {
        this.form.value.result = this.currjson.rates.CNY * (this.form.value.amounts!);
        // console.log(this.form.value.result);
      }
    })
  }

  currency: Currency[] = [
    { name: 'Dollar USA', abbrev: 'USD', symbol: ' $' },
    { name: 'Bitcoin', abbrev: 'BTC', symbol: ' B'  },
    { name: 'Euro', abbrev: 'EUR', symbol: ' €'  },
    { name: 'British pound sterling', abbrev: 'GBR', symbol: ' £'  },
    { name: 'Chinese Yuan', abbrev: 'CNY', symbol: ' ¥'  },
  ];

}




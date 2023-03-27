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
  currency: any = [];
  result: number = 0;
  // currencyFROM: string = '';
  // amounts: number = 0;
  // currencyTO: string = '';

  constructor(private cADService: CurrencyApiDataService) { }

  ngOnInit(){
    this.getSelectedCurrancy()
  }

  getSelectedCurrancy(){
    this.cADService.getCurrency().subscribe(item => {

      this.currjson = JSON.parse(JSON.stringify(item));
      this.currency = Object.keys(this.currjson.rates);
      console.log(this.currency)
     } )
  }

  form = new FormGroup({
    currencyFROM: new FormControl('UAH', Validators.required,),
    currencyTO: new FormControl('USD', Validators.required,),
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
      this.currjson = JSON.parse(JSON.stringify(data));
      let key = this.form.value.currencyTO;
      key ? this.form.value.result = this.currjson.rates[key] * (this.form.value.amounts!) : console.log('Error!');
    })
  }



}




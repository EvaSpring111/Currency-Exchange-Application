import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


// import { HeaderComponent } from './Currency_conversion/header/header.component';

import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CurrencyApiDataService } from 'src/app/service/CurrencyApiDataService.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConverterComponent } from './converter/converter/converter.component';
import { HeaderComponent } from './header/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    
  ],
  providers: [CurrencyApiDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

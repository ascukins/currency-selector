import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencySelectorComponent } from './components/currency/currency-selector/currency-selector.component';
import { CurrencyCheckboxComponent } from './components/currency/currency-checkbox/currency-checkbox.component';
import { CurrencyTileComponent } from './components/currency/currency-tile/currency-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencySelectorComponent,
    CurrencyCheckboxComponent,
    CurrencyTileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Input } from '@angular/core';
import { CurrencyEvent } from 'src/app/models/currency-event';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss']
})
export class CurrencySelectorComponent {

  selectedCurrencies = [];
  @Input() currenciesToSelect = [];

  constructor() { }

  selectCurrency(currency: string) {
    const cleanCurrencies = this.selectedCurrencies.filter(e => e !== currency);
    cleanCurrencies.push(currency);
    this.selectedCurrencies = cleanCurrencies;
  }

  unselectCurrency(currency: string) {
    this.selectedCurrencies = this.selectedCurrencies.filter(e => e !== currency);
  }

  onCurrencyAction(action: CurrencyEvent) {
    if (action.select) {
      this.selectCurrency(action.currency);
    } else {
      this.unselectCurrency(action.currency);
    }
  }

}

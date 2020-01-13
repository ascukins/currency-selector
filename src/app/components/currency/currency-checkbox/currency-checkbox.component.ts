import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyEvent } from 'src/app/models/currency-event';

@Component({
  selector: 'app-currency-checkbox',
  templateUrl: './currency-checkbox.component.html',
  styleUrls: ['./currency-checkbox.component.scss']
})
export class CurrencyCheckboxComponent {
  @Input() text = '';
  @Input() checked = false;
  @Output() currencyAction = new EventEmitter<CurrencyEvent>();

  constructor() { }

  onCheckboxChange(value: any) {
    this.checked = !this.checked;
    this.currencyAction.emit({
      select: this.checked,
      currency: this.text
    });
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyEvent } from 'src/app/models/currency-event';

@Component({
  selector: 'app-currency-tile',
  templateUrl: './currency-tile.component.html',
  styleUrls: ['./currency-tile.component.scss']
})
export class CurrencyTileComponent {

  @Input() text = '';
  @Output() currencyAction = new EventEmitter<CurrencyEvent>();

  constructor() { }

}

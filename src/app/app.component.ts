import { Component } from '@angular/core';
import { DataStoreService } from './services/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dataStoreService: DataStoreService) { }
  title = 'currency-selector';
}

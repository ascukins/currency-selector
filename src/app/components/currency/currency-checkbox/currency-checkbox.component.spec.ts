import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCheckboxComponent } from './currency-checkbox.component';

describe('CurrencyCheckboxComponent', () => {
  let component: CurrencyCheckboxComponent;
  let fixture: ComponentFixture<CurrencyCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

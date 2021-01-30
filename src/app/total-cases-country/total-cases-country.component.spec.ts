import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCasesCountryComponent } from './total-cases-country.component';

describe('TotalCasesCountryComponent', () => {
  let component: TotalCasesCountryComponent;
  let fixture: ComponentFixture<TotalCasesCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCasesCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCasesCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

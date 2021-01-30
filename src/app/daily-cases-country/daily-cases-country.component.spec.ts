import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCasesCountryComponent } from './daily-cases-country.component';

describe('DailyCasesCountryComponent', () => {
  let component: DailyCasesCountryComponent;
  let fixture: ComponentFixture<DailyCasesCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCasesCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCasesCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

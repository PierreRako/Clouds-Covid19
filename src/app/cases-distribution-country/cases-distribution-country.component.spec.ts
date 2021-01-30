import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesDistributionCountryComponent } from './cases-distribution-country.component';

describe('CasesDistributionCountryComponent', () => {
  let component: CasesDistributionCountryComponent;
  let fixture: ComponentFixture<CasesDistributionCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesDistributionCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesDistributionCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

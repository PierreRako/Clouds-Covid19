import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesDistributionWorldwideComponent } from './cases-distribution-worldwide.component';

describe('CasesDistributionWorldwideComponent', () => {
  let component: CasesDistributionWorldwideComponent;
  let fixture: ComponentFixture<CasesDistributionWorldwideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesDistributionWorldwideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesDistributionWorldwideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

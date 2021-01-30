import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCasesWorldwideComponent } from './total-cases-worldwide.component';

describe('TotalCasesWorldwideComponent', () => {
  let component: TotalCasesWorldwideComponent;
  let fixture: ComponentFixture<TotalCasesWorldwideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCasesWorldwideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCasesWorldwideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

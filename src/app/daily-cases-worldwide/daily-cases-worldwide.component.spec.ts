import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCasesWorldwideComponent } from './daily-cases-worldwide.component';

describe('DailyCasesWorldwideComponent', () => {
  let component: DailyCasesWorldwideComponent;
  let fixture: ComponentFixture<DailyCasesWorldwideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCasesWorldwideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCasesWorldwideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

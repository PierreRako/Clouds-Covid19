import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryWorldwideComponent } from './summary-worldwide.component';

describe('SummaryWorldwideComponent', () => {
  let component: SummaryWorldwideComponent;
  let fixture: ComponentFixture<SummaryWorldwideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryWorldwideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryWorldwideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

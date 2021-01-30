import { TestBed } from '@angular/core/testing';

import { CountryPageService } from './country-page.service';

describe('CountryPageService', () => {
  let service: CountryPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

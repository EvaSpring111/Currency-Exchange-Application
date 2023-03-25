import { TestBed } from '@angular/core/testing';

import { CurrencyApiDataService } from './CurrencyApiDataService.service';

describe('CurrencyApiDataService', () => {
  let service: CurrencyApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

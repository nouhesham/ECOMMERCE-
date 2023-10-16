import { TestBed } from '@angular/core/testing';

import { CardsApiService } from './cards.api.service';

describe('CardsApiService', () => {
  let service: CardsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

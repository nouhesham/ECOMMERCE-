import { TestBed } from '@angular/core/testing';

import { CartlogicService } from './cartlogic.service';

describe('CartlogicService', () => {
  let service: CartlogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartlogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

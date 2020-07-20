import { TestBed } from '@angular/core/testing';

import { OverpaymentserviceService } from './overpaymentservice.service';

describe('OverpaymentserviceService', () => {
  let service: OverpaymentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverpaymentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

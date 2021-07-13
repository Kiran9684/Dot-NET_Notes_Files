import { TestBed } from '@angular/core/testing';

import { WebapiserviceService } from './webapiservice.service';

describe('WebapiserviceService', () => {
  let service: WebapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

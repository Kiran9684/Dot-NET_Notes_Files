import { TestBed } from '@angular/core/testing';

import { ProductUpdateGuard } from './product-update.guard';

describe('ProductUpdateGuard', () => {
  let guard: ProductUpdateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductUpdateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

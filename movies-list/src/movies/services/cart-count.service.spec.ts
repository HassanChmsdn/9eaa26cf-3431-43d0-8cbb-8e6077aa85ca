/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartCountService } from './cart-count.service';

describe('Service: CartCount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartCountService]
    });
  });

  it('should ...', inject([CartCountService], (service: CartCountService) => {
    expect(service).toBeTruthy();
  }));
});

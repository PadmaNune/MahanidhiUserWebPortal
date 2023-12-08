import { TestBed } from '@angular/core/testing';

import { ServiceProviderReviewService } from './service-provider-review.service';

describe('ServiceProviderReviewService', () => {
  let service: ServiceProviderReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProviderReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

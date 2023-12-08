import { TestBed } from '@angular/core/testing';

import { BagdeService } from './bagde.service';

describe('BagdeService', () => {
  let service: BagdeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BagdeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

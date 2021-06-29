import { TestBed } from '@angular/core/testing';

import { KpDataService } from './kp-data.service';

describe('KpDataService', () => {
  let service: KpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

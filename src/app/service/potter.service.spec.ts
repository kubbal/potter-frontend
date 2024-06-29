import { TestBed } from '@angular/core/testing';

import { PotterService } from './potter.service';

describe('PotterService', () => {
  let service: PotterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

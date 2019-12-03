import { TestBed } from '@angular/core/testing';

import { SuppierService } from './suppier.service';

describe('SuppierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuppierService = TestBed.get(SuppierService);
    expect(service).toBeTruthy();
  });
});

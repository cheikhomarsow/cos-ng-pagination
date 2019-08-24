import { TestBed } from '@angular/core/testing';

import { CosNgPaginationService } from './cos-ng-pagination.service';

describe('CosNgPaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CosNgPaginationService = TestBed.get(CosNgPaginationService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FunsManagerService } from './funs-manager.service';

describe('FunsManagerService', () => {
  let service: FunsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

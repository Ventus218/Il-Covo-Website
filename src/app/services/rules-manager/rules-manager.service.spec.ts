import { TestBed } from '@angular/core/testing';

import { RulesManagerService } from './rules-manager.service';

describe('RulesManagerService', () => {
  let service: RulesManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulesManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

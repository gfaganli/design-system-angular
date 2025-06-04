import { TestBed } from '@angular/core/testing';

import { UiCoreService } from './ui-core.service';

describe('UiCoreService', () => {
  let service: UiCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

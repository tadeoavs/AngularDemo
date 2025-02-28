import { TestBed } from '@angular/core/testing';

import { LocalsStorageService } from './local-storage.service';

describe('LocalsStorageService', () => {
  let service: LocalsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

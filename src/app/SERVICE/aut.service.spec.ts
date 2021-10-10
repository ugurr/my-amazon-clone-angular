import { TestBed } from '@angular/core/testing';

import { AutService } from './aut.service';

describe('AutService', () => {
  let service: AutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

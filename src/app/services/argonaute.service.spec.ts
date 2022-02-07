import { TestBed } from '@angular/core/testing';

import { ArgonauteService } from './argonaute.service';

describe('ArgonauteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArgonauteService = TestBed.get(ArgonauteService);
    expect(service).toBeTruthy();
  });
});

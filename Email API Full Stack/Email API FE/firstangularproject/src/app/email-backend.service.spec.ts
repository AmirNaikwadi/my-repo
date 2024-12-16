import { TestBed } from '@angular/core/testing';

import { EmailBackendService } from './email-backend.service';

describe('EmailBackendService', () => {
  let service: EmailBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

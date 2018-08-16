import { TestBed, inject } from '@angular/core/testing';

import { AttendaceService } from './attendace.service';

describe('AttendaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendaceService]
    });
  });

  it('should be created', inject([AttendaceService], (service: AttendaceService) => {
    expect(service).toBeTruthy();
  }));
});

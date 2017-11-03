import { TestBed, inject } from '@angular/core/testing';

import { GetuserlistService } from './getuserlist.service';


describe('GetuserlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetuserlistService]
    });
  });

  it('should be created', inject([GetuserlistService], (service: GetuserlistService) => {
    expect(service).toBeTruthy();
  }));
});

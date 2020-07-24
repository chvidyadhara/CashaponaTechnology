import { TestBed } from '@angular/core/testing';

import { UserregsreService } from './userregsre.service';

describe('UserregsreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserregsreService = TestBed.get(UserregsreService);
    expect(service).toBeTruthy();
  });
});

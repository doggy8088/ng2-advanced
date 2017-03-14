import { TestBed, async, inject } from '@angular/core/testing';

import { NeedLoginGuard } from './need-login.guard';

describe('NeedLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NeedLoginGuard]
    });
  });

  it('should ...', inject([NeedLoginGuard], (guard: NeedLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});

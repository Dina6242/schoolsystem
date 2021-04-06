import { TestBed } from '@angular/core/testing';

import { UnloginGuard } from './unlogin.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('UnloggedGuard', () => {
  let guard: UnloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(UnloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

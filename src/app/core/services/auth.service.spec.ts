import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('isAuthenticated should work', () => {
    localStorage.setItem('token', 'token');
    expect(service.isAuthenticated).toBeTruthy();
    localStorage.clear();
    expect(service.isAuthenticated).toBeFalsy();
  });
  it('authenticate should work', () => {
    service.authenticate('foo');
    expect(localStorage.getItem('token')).toEqual('foo');
  });
  it('logout should work', () => {
    localStorage.setItem('token', 'token');
    service.logout();
    expect(localStorage.getItem('token')).toBeFalsy();
  });
});

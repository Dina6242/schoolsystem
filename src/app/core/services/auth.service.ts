import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() {
  }

  get isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  authenticate(res: string): void {
    localStorage.setItem('token', res);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}

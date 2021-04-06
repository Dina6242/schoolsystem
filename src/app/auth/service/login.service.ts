import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor() {
  }

  login(user: any): Observable<string> {
    return of('token');
  }
}

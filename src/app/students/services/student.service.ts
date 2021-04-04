import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Response } from '../../core/interfaces/response';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private  http: HttpClient) {
  }

  allStudent(): Observable<Response<Student>> {
    return this.http.get<Response<Student>>(`${environment.apiUrl}users`);
  }
}

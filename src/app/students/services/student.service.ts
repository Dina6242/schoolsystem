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

  allStudent(page: string, perPage: string): Observable<Response<Student>> {
    return this.http.get<Response<Student>>(`${environment.apiUrl}users`, {params: {page, per_page: perPage}});
  }

  getStudentById(id: number): Observable<{ data: Student }> {
    return this.http.get<{ data: Student }>(`${environment.apiUrl}users/${id}`);
  }
}

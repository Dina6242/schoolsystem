import { TestBed } from '@angular/core/testing';

import { StudentService } from './student.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Student } from '../interfaces/student';
import { Response } from '../../core/interfaces/response';
import { environment } from '../../../environments/environment';

describe('StudentService', () => {
  const studentById: { data: Student } = {
    data: {id: 1, avatar: 'avatar.jpg', email: 'dina@yahoo.com', first_name: 'Dina', last_name: 'Samer'},
  };
  const testStudent: Response<Student> = {
    per_page: 6,
    total: 12,
    data: [studentById.data],
    page: 1,
    total_pages: 2,
  };
  let service: StudentService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(StudentService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('allStudent should work', () => {
    service.allStudent('1', '6').subscribe((students) => {
      expect(students).toBe(testStudent);
    });
    const req = httpTestingController.expectOne(`${environment.apiUrl}users?page=1&per_page=6`);
    expect(req.request.method).toEqual('GET');
    req.flush(testStudent);
  });
  it('getStudentById should work', () => {
    service.getStudentById(1).subscribe((students) => {
      expect(students).toBe(studentById);
    });
    const req = httpTestingController.expectOne(`${environment.apiUrl}users/1`);
    expect(req.request.method).toEqual('GET');
    req.flush(studentById);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

});

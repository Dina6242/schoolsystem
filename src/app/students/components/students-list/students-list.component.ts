import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../interfaces/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})
export class StudentsListComponent implements OnInit {
  students: Student[];
  total: number;
  perPage = 6;
  currentPage = 1;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.pageChanged({page: 1});
  }

  pageChanged(event: any): void {
    this.studentService.allStudent(event.page.toString(), this.perPage.toString()).subscribe(res => {
      this.students = res.data;
      this.total = res.total;
      this.perPage = res.per_page;
    });
  }
}

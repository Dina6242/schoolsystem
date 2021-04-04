import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../interfaces/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})
export class StudentsListComponent implements OnInit {
  students?: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentService.allStudent().subscribe(res => {
      this.students = res.data;
    });
  }
}

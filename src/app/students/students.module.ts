import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';


@NgModule({
  declarations: [StudentsListComponent, StudentDetailsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
  ],
})
export class StudentsModule {
}

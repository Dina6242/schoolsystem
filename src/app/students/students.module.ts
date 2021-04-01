import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './components/students-list/students-list.component';


@NgModule({
  declarations: [StudentsListComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
  ],
})
export class StudentsModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';



const routes: Routes = [{ path: '', redirectTo: 'add-student',
pathMatch: 'full' },
{path:'add-student',component:AddStudentComponent} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

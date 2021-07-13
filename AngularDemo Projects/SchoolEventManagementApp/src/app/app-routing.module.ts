import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule) }, { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

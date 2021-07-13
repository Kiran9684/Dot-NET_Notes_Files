import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { ListEventComponent } from './list-event/list-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';


const routes: Routes = [{ path: '', redirectTo: 'list-event',
 pathMatch: 'full' },
 {path:'list-event',component:ListEventComponent},
 { path:'add-event',component:AddEventComponent},
 { 
  path:'updateevent/:id',component:UpdateEventComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }

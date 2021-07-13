import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { ListEventComponent } from './list-event/list-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';


@NgModule({
  declarations: [
    
  
    ListEventComponent,
    AddEventComponent,
    UpdateEventComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class EventModule { }

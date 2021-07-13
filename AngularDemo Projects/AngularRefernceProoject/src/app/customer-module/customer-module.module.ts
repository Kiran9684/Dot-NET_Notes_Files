import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { GetCustomersComponent } from './get-customers/get-customers.component';
import { RouterModule } from '@angular/router';

import{ReactiveFormsModule}from '@angular/forms';
import{FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AddCustomerComponent,
    GetCustomersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {path :'add-customer',component :AddCustomerComponent},
      {path : 'get-customer' , component :GetCustomersComponent},
      {path : '' ,redirectTo: 'get-customer' , pathMatch: 'full'}
    ])
  ]
})
export class CustomerModuleModule { }

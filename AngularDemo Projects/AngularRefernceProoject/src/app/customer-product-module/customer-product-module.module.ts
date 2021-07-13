import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerProductComponent } from './add-customer-product/add-customer-product.component';
import { GetCustomerProductsComponent } from './get-customer-products/get-customer-products.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddCustomerProductComponent,
    GetCustomerProductsComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'add-customer-product' , component :AddCustomerProductComponent},
      {path : 'get-customer-product' , component:GetCustomerProductsComponent},
      {path: '' , redirectTo:'get-customer-product' ,pathMatch : 'full'}
    ])
  ]
})
export class CustomerProductModuleModule { }

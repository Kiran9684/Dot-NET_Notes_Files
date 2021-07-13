import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductUpdateGuard } from '../RouteGuards/product-update.guard';



@NgModule({
  declarations: [
    ProductListComponent,
    AddProductComponent,  
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path :"add-product",
      component : AddProductComponent,
   
    },
    {
      path : "product-list",
      component : ProductListComponent,
     canDeactivate : [ProductUpdateGuard]
    },
    {
      path : "update-product",
      component : UpdateProductComponent
    },
    {
      path : "update-product/:title",
      component : UpdateProductComponent
     
    },
    {
      path:'',
      redirectTo : 'product-list',
      pathMatch : 'full'
    }
    ])
  ]
})
export class ProductModuleModule { }

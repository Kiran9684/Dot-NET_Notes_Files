import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductUpdateGuard } from './RouteGuards/product-update.guard';

const routes: Routes = [
  {
    path : "Home",
    component : HomeComponent
  },
  {
    path : "customer",
    loadChildren : ()=> import('../app/customer-module/customer-module.module').then(m =>m.CustomerModuleModule)
  },
  {
    path :"product",
    loadChildren : ()=> import('../app/product-module/product-module.module').then(m=>m.ProductModuleModule),
    
  },
  {
    path : "customer-product",
    loadChildren : ()=> import('../app/customer-product-module/customer-product-module.module').then(m=>m.CustomerProductModuleModule)
  },
  {
  path : '' ,
  redirectTo :'Home',
  pathMatch : 'full'
  },
  {
    path : '**',
    redirectTo :'Home',
    pathMatch :'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

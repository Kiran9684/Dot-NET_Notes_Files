import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddProductComponent } from '../product-module/add-product/add-product.component';
import { ProductListComponent } from '../product-module/product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductUpdateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: ProductListComponent ,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canExit();
  }
  
}

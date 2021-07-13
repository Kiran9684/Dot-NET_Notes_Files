import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : IProduct[] = [];
  errorMessage:string = '';
  constructor(private service :ProductServiceService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe({
      next : products => this.productList = products,
      error : err=> this.errorMessage = err
    });
  }

  canExit(): boolean {
    if (confirm("Are you Sure You Want To Leave The Page ?")) {
      return true;
    }
    else {
      return false;
    }
  }

}

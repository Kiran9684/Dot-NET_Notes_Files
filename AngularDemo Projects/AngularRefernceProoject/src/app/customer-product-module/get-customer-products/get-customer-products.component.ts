import { Component, OnInit } from '@angular/core';
import { ICustomerProduct } from 'src/app/Models/ICustomerProduct';
import { CustomerProductService } from 'src/app/Services/customer-product.service';

@Component({
  selector: 'app-get-customer-products',
  templateUrl: './get-customer-products.component.html',
  styleUrls: ['./get-customer-products.component.css']
})
export class GetCustomerProductsComponent implements OnInit {
 dataList : ICustomerProduct[] = [];
  constructor(private service : CustomerProductService) { }

  ngOnInit(): void {
    this.service.getdataList().subscribe((result)=>{
      console.warn(result);
      this.dataList = result;
    })
  }
  deleteProduct(custId : string) 
  {
    if(confirm("Want To Delete ?"))
    {
      this.service.delete(custId).subscribe((result)=>
      {
        console.log(result);
      })
    }
  //  window.location.reload();
  }

}

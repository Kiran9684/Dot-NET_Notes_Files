import { Component, OnInit } from '@angular/core';
import { ICustomerProduct } from 'src/app/Models/ICustomerProduct';
import { CustomerProductService } from 'src/app/Services/customer-product.service';

@Component({
  selector: 'app-add-customer-product',
  templateUrl: './add-customer-product.component.html',
  styleUrls: ['./add-customer-product.component.css']
})
export class AddCustomerProductComponent implements OnInit {

  alert :boolean =false;
  constructor(private service : CustomerProductService) { }

  ngOnInit(): void {
  }

  collectNewAdmin(data:ICustomerProduct){
    
    this.service.addData(data).subscribe((result)=>{
      console.log(result);
    })
    this.alert=true;
  }

  closeAlert(){
    this.alert=false;
  }

}

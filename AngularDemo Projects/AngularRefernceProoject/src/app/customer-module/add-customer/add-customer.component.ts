import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addCustomer = new FormGroup({
    customerID : new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required ,Validators.maxLength(20)]),
    address: new FormControl('',[Validators.required , Validators.maxLength(100)])
  })
  alert: boolean=false;
  errorMessage:string = '';
  constructor(private service: CustomerServiceService) { }

  ngOnInit(): void {
  }

  collectCustomerData()
  {
    console.warn(this.addCustomer.value);
    this.service.addCustomer(this.addCustomer.value).subscribe((result) =>{
      console.warn(result)
    });
    
    this.alert=true;
   // console.warn('Belo')
    this.addCustomer.reset({});    
  }
  closeAlert(){
    this.alert=false;
  }

}

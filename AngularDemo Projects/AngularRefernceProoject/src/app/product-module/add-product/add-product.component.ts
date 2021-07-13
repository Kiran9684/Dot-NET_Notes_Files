import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service:ProductServiceService) { }
  alert :boolean = false;
  errorMsg :any ='';
  addProduct = new FormGroup({
  productId : new FormControl('',[Validators.required]),
  title: new FormControl('',[Validators.required, Validators.maxLength(20)]),
  price: new FormControl('',[Validators.required])
})

  ngOnInit(): void {
  }
  collectProductData()
  {
    this.service.addProduct(this.addProduct.value).subscribe((result)=>{
      console.log(result)
    },error => this.errorMsg = error);
    
    this.alert=true;
   // console.warn('Belo')
    this.addProduct.reset({});    
  }

  closeAlert(){
    this.alert=false;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  updateProduct = new FormGroup({
    price : new FormControl('',[Validators.required])
  })
  errMsg : any ='';
  constructor(private service:ProductServiceService , private router : ActivatedRoute) { }
  alert :boolean =false;
  ngOnInit(): void {
    console.warn(this.router.snapshot.params.title)
    let title :string = this.router.snapshot.params.title
    this.service.getProductByTitle(title).subscribe((result)=>{
      console.warn(result)
      this.updateProduct = new FormGroup({
        productId : new FormControl(result["productId"]),
        title:new FormControl(result["title"]),
        price :new FormControl(result["price"])

      })
    })
  }
  collectNewProduct()
  {
    console.warn("hello");
  // console.warn(this.updateProduct.value.title = 'aaaa');
    this.service.updateProductPrice(this.updateProduct.value).subscribe((result : any)=>{
      console.warn("Inside Update")

    },error => this.errMsg = error
    );
    
    this.alert = true;
    this.updateProduct.reset({});
  }
  closeAlert() {
    this.alert = false;
  }
}

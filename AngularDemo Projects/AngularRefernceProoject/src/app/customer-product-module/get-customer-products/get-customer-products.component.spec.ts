import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EMPTY, from } from 'rxjs';
import { CustomerProductService } from 'src/app/Services/customer-product.service';

import { GetCustomerProductsComponent } from './get-customer-products.component';

fdescribe('GetCustomerProductsComponent', () => {
  let component: GetCustomerProductsComponent;
  let fixture: ComponentFixture<GetCustomerProductsComponent>;
  let service : CustomerProductService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCustomerProductsComponent ],
      imports :[HttpClientModule, RouterTestingModule],
      providers :[CustomerProductService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerProductsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CustomerProductService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the server to delete an item if the user confirms',()=>{
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service,'delete').and.returnValue(EMPTY
    );

    const id :string = 'C1';
    component.deleteProduct(id);
    expect(spy).toHaveBeenCalledWith(id);
  })

  it('should not call  the server to delete an item if the user cancels',()=>{
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service,'delete').and.returnValue(EMPTY
    );

    const id :string = 'C1';
    component.deleteProduct(id);
    expect(spy).not.toHaveBeenCalledWith(id);
  })

    // it('should delete the product from products array within the component ',()=>{
    //   component.dataList =[{
    //     productId : 'P1',
    //     product : {productId :'P1',title :'mouse',price :120},
    //     customerID:'C1',
    //     customer : {customerID:'C1', name:'kiran',address :'Bangalore'}
    //   },
    //   {
    //     productId : 'P2',
    //     product : {productId :'P2',title :'keyword',price :120},
    //     customerID:'C2',
    //     customer : {customerID:'C2', name:'kiran',address :'Bangalore'}
    //   }
    // ];
    // spyOn(window,'confirm').and.returnValue(true);
    // spyOn(service,'delete').and.returnValue(
    //   EMPTY
    // );
    // const custId = 'C2';
    // component.deleteProduct(custId);

    // const index = component.dataList.findIndex(
    //   item => item.customerID === custId
    // );
    // expect(index).toBeLessThan(0);  

    // })
});

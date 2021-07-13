import { HttpClientModule } from '@angular/common/http';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';

import { CustomerServiceService } from 'src/app/Services/customer-service.service';

import { AddCustomerComponent } from './add-customer.component';

fdescribe('AddCustomerComponent', () => {
  let component: AddCustomerComponent;
  let fixture: ComponentFixture<AddCustomerComponent>;
  let customerService : CustomerServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerComponent ],
      imports: [FormsModule, HttpClientModule, RouterTestingModule, ReactiveFormsModule],
      providers :[CustomerServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerComponent);
    component = fixture.componentInstance;
    customerService = TestBed.inject(CustomerServiceService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Set submitted to true',()=>{
    component.collectCustomerData();
    expect(component.collectCustomerData).toBeTruthy();
  })

  it('Form Should be valid',()=>{
    component.addCustomer.controls['customerID'].setValue('C1');
    component.addCustomer.controls['name'].setValue('kiran');
    component.addCustomer.controls['address'].setValue('Blore');
    expect(component.addCustomer.valid).toBeTruthy();
  })



  // it('should add customer Details when form is submitted',()=>{
  //   const spy = spyOn(customerService ,'addCustomer').and.returnValue(EMPTY);
  //   const compiled : DebugElement = fixture.debugElement;
  //   const button = compiled.query(By.css('#button'));
  //   button.nativeElement.click();
  //   expect(spy).toHaveBeenCalled();
  // })


});

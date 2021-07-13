import { HttpClientModule } from '@angular/common/http';
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { from } from 'rxjs';
import { ICustomer } from 'src/app/Models/ICustomer';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';

import { GetCustomersComponent } from './get-customers.component';

fdescribe('GetCustomersComponent', () => {
  let component: GetCustomersComponent;
  let fixture: ComponentFixture<GetCustomersComponent>;
  let customerService : CustomerServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCustomersComponent ],
      imports :[HttpClientModule,RouterTestingModule],
      providers : [CustomerServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomersComponent);
    component = fixture.componentInstance;
    customerService = TestBed.inject(CustomerServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', (() => {
    //const fixture = TestBed.createComponent(GetCustomersComponent);
   // fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Customers List');
  }));


  it('should get customers from customer service' , ()=>{
    const customers :ICustomer[] =[
      {
        customerID: 'C1',
        name : 'kiran',
        address : 'Bangalorre'
      },
      {
        customerID: 'C2',
        name : 'Aniket',
        address : 'Bangalorre'
      },
    ];
    spyOn(customerService ,'getCustomers').and.callFake(()=>{
      return from([customers]);
    });
    component.ngOnInit();
    expect(component.customerList).toEqual(customers);
  })
});

import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/Models/ICustomer';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';

@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.css']
})
export class GetCustomersComponent implements OnInit {

  customerList : ICustomer[] = [];
  errorMessage: string = " ";
  constructor(private service:CustomerServiceService) { }

  ngOnInit(): void {

    this.service.getCustomers().subscribe({
      next: customers => this.customerList = customers,
      error: err => this.errorMessage = err,
    })
    console.log("Inside On In it")
  }

}

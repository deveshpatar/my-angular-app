import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer-api/customer.service';
import { Customer } from './customer-api/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-angular-app';

 
  constructor(private customerService: CustomerService){
    
  }

  listOfCustomer: Customer[];

  ngOnInit(){
    this.customerService.getCustomer().subscribe(
      data => 
      {
          this.listOfCustomer = data;
    });
  }

}
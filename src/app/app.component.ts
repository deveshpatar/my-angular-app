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
  customerDetails: Customer;
  custObject: Customer;

  ngOnInit(){
    this.customerService.getCustomer().subscribe(
      data =>  
      {
          this.listOfCustomer = data;
    });

    this.customerService.getCustomerDetails().subscribe(
      data =>{
          this.customerDetails = data;
      }
    );

    var custObj = new Customer();
    custObj.customerName = 'Advik';
    custObj.customerSex = 'Male';
    custObj.customerAdd1 = 'Ambikapur';
    custObj.cusromerAdd2 = 'Surguja';

    this.customerService.createCustomer(custObj).subscribe(
      data =>{
        this.custObject = data;
      }
    );
  }

}
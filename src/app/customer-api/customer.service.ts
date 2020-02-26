import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Customer } from './customer';

@Injectable()
export class CustomerService{

    constructor(private httpClient: HttpClient){

    }

    //Call Get API
    getCustomer():Observable<any>{
       return this.httpClient.get("http://localhost:90/customers");
    }

    //Call Get API with Parameter
    getCustomerDetails():Observable<any>{
        let customerId = new HttpParams().set('customerId',"3");
        return this.httpClient.get("http://localhost:90/customers",{params:customerId});
     }

     //Call Post API
     createCustomer(custObj:Customer): Observable<any>{
        return this.httpClient.post("http://localhost:90/customers", custObj);
     }


}
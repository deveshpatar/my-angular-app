import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService{

    constructor(private httpClient: HttpClient){

    }

    getCustomer():Observable<any>{
       return this.httpClient.get("http://localhost:90/customers");
    }

}
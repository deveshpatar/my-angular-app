import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ArticleService{
      
constructor(private http: HttpClient){
}

getAllArticles(): Observable<any>{
    return this.http.get('http://localhost:8090/user/articles');
}

}
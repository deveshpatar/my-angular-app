import { Component, OnInit } from '@angular/core';
import { ArticleService } from "./article-api/article.service";
import { Article } from "./article-api/article";
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-angular-app';

  constructor(private articleService: ArticleService){
  }

  listOfArticles: Article[];

  ngOnInit(){
    this.articleService.getAllArticles().subscribe(
      data => 
      {
          this.listOfArticles = data;
    });
  }

}



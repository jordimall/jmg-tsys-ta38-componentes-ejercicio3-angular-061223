import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormArticleComponent } from './form-article/form-article.component';
import { Article } from './models/article';
import { TableArticleComponent } from './table-article/table-article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    FormArticleComponent,
    TableArticleComponent,
  ],
})
export class AppComponent {
  articles: Article[] = [];
  index: number = Number.MIN_VALUE;
  article: undefined | Article = undefined;

  public addArticle = (article: Article): void => {
    this.articles.push(article);
  };

  public editArticle = (article: Article): void => {
    this.articles[this.index] = article;
  };

  public deleteArticle = (i: number): void => {
    this.articles.splice(i, 1);
  };

  public modifyIndex = (num: number) => {
    this.index = num;
    this.article = this.articles[this.index];
  };
}

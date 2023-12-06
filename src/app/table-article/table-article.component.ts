import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-table-article',
  standalone: true,
  imports: [],
  templateUrl: './table-article.component.html',
  styleUrl: './table-article.component.css',
})
export class TableArticleComponent {
  @Input() listArticles: any | Article[];
  @Output() borrarArticle = new EventEmitter();
  @Output() editarArticle = new EventEmitter();

  public eliminarArticulo = (index: number): void => {
    this.borrarArticle.emit(index);
  };

  public modificarArticulo = (index: number): void => {
    this.editarArticle.emit(index);
  };
}

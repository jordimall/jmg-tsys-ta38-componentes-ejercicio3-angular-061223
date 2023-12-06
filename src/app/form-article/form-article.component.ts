import {
  Component,
  Output,
  Input,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Article } from '../models/article';

@Component({
  selector: 'app-form-article',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-article.component.html',
  styleUrl: './form-article.component.css',
})
export class FormArticleComponent implements OnChanges {
  articleForm = new FormGroup({
    code: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*\\.?[0-9]*$'),
      Validators.min(0),
    ]),
    description: new FormControl('', Validators.required),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*\\.?[0-9]*$'),
      Validators.min(0),
    ]),
  });

  @Input() article: any | Article;

  @Output() addArticle = new EventEmitter();
  @Output() editArticle = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['article'] && changes['article'].currentValue !== undefined) {
      this.articleForm.patchValue({
        code: this.article.code,
        description: this.article.description,
        price: this.article.price,
      });
    }
  }

  public enviarFormulario = (): void => {
    if (this.article !== undefined) {
      this.editarArticulo();
    } else {
      this.crearArticulo();
    }
    this.articleForm.reset();
  };

  private crearArticulo = (): void => {
    let code: string = this.validarCamposString(this.articleForm.value.code);
    let description: string = this.validarCamposString(
      this.articleForm.value.description
    );
    let price: number = this.validarCamposNumbers(this.articleForm.value.price);
    if (![code, description].includes('') && price != Number.MIN_VALUE) {
      this.addArticle.emit(new Article(code, description, price));
    } else {
      alert('Campos invalidos');
    }
  };

  private editarArticulo = (): void => {
    let code: string = this.validarCamposString(this.articleForm.value.code);
    let description: string = this.validarCamposString(
      this.articleForm.value.description
    );
    let price: number = this.validarCamposNumbers(this.articleForm.value.price);
    if (![code, description].includes('') && price != Number.MIN_VALUE) {
      this.editArticle.emit(new Article(code, description, price));
      this.article = undefined;
    } else {
      alert('Campos invalidos');
    }
  };

  private validarCamposString = (value: any): string => {
    let valueDefect: string = '';
    if (value != null && value != undefined) {
      return value;
    }
    return valueDefect;
  };

  private validarCamposNumbers = (value: any): number => {
    let valueDefect: number = Number.MIN_VALUE;
    if (value != null && value != undefined) {
      return value;
    }
    return valueDefect;
  };
}

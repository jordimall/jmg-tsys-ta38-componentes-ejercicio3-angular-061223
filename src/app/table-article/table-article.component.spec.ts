import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableArticleComponent } from './table-article.component';

describe('TableArticleComponent', () => {
  let component: TableArticleComponent;
  let fixture: ComponentFixture<TableArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaPessoaComponent } from './cria-pessoa.component';

describe('CriaPessoaComponent', () => {
  let component: CriaPessoaComponent;
  let fixture: ComponentFixture<CriaPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriaPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

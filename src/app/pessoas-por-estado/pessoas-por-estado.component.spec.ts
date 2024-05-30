import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasPorEstadoComponent } from './pessoas-por-estado.component';

describe('PessoasPorEstadoComponent', () => {
  let component: PessoasPorEstadoComponent;
  let fixture: ComponentFixture<PessoasPorEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasPorEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasPorEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

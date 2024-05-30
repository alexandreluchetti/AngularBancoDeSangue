import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcPorDecadaComponent } from './imc-por-decada.component';

describe('ImcPorDecadaComponent', () => {
  let component: ImcPorDecadaComponent;
  let fixture: ComponentFixture<ImcPorDecadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImcPorDecadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcPorDecadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

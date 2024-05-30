import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadoresParaCadaSangueReceptorComponent } from './doadores-para-cada-sangue-receptor.component';

describe('DoadoresParaCadaSangueReceptorComponent', () => {
  let component: DoadoresParaCadaSangueReceptorComponent;
  let fixture: ComponentFixture<DoadoresParaCadaSangueReceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoadoresParaCadaSangueReceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoadoresParaCadaSangueReceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

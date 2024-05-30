import { TestBed } from '@angular/core/testing';

import { DoadoresParaCadaSangueReceptorService } from './doadores-para-cada-sangue-receptor.service';

describe('DoadoresParaCadaSangueReceptorService', () => {
  let service: DoadoresParaCadaSangueReceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoadoresParaCadaSangueReceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ImcPorDecadaService } from './imc-por-decada.service';

describe('ImcPorDecadaService', () => {
  let service: ImcPorDecadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImcPorDecadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

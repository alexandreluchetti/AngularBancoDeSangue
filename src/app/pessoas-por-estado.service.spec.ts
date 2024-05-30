import { TestBed } from '@angular/core/testing';

import { PessoasPorEstadoService } from './pessoas-por-estado.service';

describe('PessoasPorEstadoService', () => {
  let service: PessoasPorEstadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoasPorEstadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

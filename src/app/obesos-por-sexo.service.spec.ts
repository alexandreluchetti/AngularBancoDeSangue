import { TestBed } from '@angular/core/testing';

import { ObesosPorSexoService } from './obesos-por-sexo.service';

describe('ObesosPorSexoService', () => {
  let service: ObesosPorSexoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObesosPorSexoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

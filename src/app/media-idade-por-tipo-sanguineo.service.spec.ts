import { TestBed } from '@angular/core/testing';

import { MediaIdadePorTipoSanguineoService } from './media-idade-por-tipo-sanguineo.service';

describe('MediaIdadePorTipoSanguineoService', () => {
  let service: MediaIdadePorTipoSanguineoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaIdadePorTipoSanguineoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

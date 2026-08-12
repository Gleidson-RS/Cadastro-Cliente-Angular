import { TestBed } from '@angular/core/testing';

import { UfMunicipioServiceTsService } from './uf-municipio-service';

describe('UfMunicipioServiceTsService', () => {
  let service: UfMunicipioServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfMunicipioServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

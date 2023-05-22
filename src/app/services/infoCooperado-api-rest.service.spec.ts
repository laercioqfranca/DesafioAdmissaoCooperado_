import { TestBed } from '@angular/core/testing';
import { InfoCooperadoApiRestService } from './infoCooperado-api-rest.service';


describe('InfoCooperadoApiRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoCooperadoApiRestService = TestBed.get(InfoCooperadoApiRestService);
    expect(service).toBeTruthy();
  });
});

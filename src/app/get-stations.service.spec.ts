import { TestBed } from '@angular/core/testing';

import { GetStationsService } from './get-stations.service';

describe('GetStationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStationsService = TestBed.get(GetStationsService);
    expect(service).toBeTruthy();
  });
});

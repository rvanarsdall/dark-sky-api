import { TestBed } from '@angular/core/testing';

import { FindWeatherService } from './find-weather.service';

describe('FindWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindWeatherService = TestBed.get(FindWeatherService);
    expect(service).toBeTruthy();
  });
});

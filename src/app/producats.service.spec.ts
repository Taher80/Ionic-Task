import { TestBed } from '@angular/core/testing';

import { ProducatsService } from './producats.service';

describe('ProducatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProducatsService = TestBed.get(ProducatsService);
    expect(service).toBeTruthy();
  });
});

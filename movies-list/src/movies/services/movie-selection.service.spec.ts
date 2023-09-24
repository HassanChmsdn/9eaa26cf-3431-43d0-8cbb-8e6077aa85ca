/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieSelectionService } from './movie-selection.service';

describe('Service: MovieSelection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieSelectionService]
    });
  });

  it('should ...', inject([MovieSelectionService], (service: MovieSelectionService) => {
    expect(service).toBeTruthy();
  }));
});

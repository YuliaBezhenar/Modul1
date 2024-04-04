import { TestBed } from '@angular/core/testing';

import { CountPairsService } from './count-pairs.service';
import { MyArray } from '../myform/Class/MyArray';

describe('CountPairsService', () => {
  let service: CountPairsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountPairsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Count pairs', () => {
    const testMatrix = new MyArray(3, 3);
    testMatrix.setValue(0, 0, 1);
    testMatrix.setValue(0, 1, 1);
    testMatrix.setValue(0, 2, 2);
    testMatrix.setValue(1, 0, 2);
    testMatrix.setValue(1, 1, 2);
    testMatrix.setValue(1, 2, 3);
    testMatrix.setValue(2, 0, 3);
    testMatrix.setValue(2, 1, 4);
    testMatrix.setValue(2, 2, 4);
    
    const count = service.countAdjacentPairs(testMatrix);
    expect(count).toEqual(3);
  });
});

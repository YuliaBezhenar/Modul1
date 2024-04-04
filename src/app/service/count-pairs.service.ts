import { MyArray } from './../myform/Class/MyArray';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountPairsService {
  constructor() { }

  countAdjacentPairs(matrix: MyArray): number {
    let count = 0;
    for (let i = 0; i < matrix.height; i++) {
        for (let j = 0; j < matrix.length - 1; j++) {
            if (matrix.matrix[i][j] === matrix.matrix[i][j + 1]) {
                count++;
            }
        }
    }
    for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < matrix.height - 1; i++) {
            if (matrix.matrix[i][j] === matrix.matrix[i + 1][j]) {
                count++;
            }
        }
    }
    return count;
  }

}

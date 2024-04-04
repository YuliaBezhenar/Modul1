import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MyArray } from './Class/MyArray';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {
  matrixForm!: FormGroup;
  matrix: MyArray = new MyArray(2, 2);

  constructor(private fb: FormBuilder) {
    this.matrixForm = this.fb.group({
      matrixLength: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      matrixHeight: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      //matrixValues: this.fb.array([]),
      matrixValues: new FormArray([]),
      
    });
  }


  ngOnInit() { }

  get matrixValues() {
    return this.matrixForm.get('matrixValues') as FormArray;
  }
  getControls() {
    return (this.matrixForm.get('matrixValues') as FormArray).controls;
  }
  getRowControls(rowIndex: number) {
  return (this.matrixValues.at(rowIndex) as FormArray).controls;
}

  

  createMatrixControls(matrixLength: number): FormArray {
    const controls = this.fb.array([]);
    for (let i = 0; i < matrixLength; i++) {
      controls.push(this.fb.control(0)); //0 - значення за замовчуванням
    }
    return controls;
  }
  

  setMatrixValues(matrixLength: number, matrixHeight: number): void {
    const matrixArray = this.matrixForm.get('matrixValues') as FormArray;
    matrixArray.clear();
    if (matrixLength > 0 && matrixLength <= 10 && matrixHeight > 0 && matrixHeight <= 10) {
      for (let i = 0; i < matrixHeight; i++) {
        matrixArray.push(this.createMatrixControls(matrixLength));
      }
    }
  }


  onSubmit() {
    if (this.matrixForm.valid) {
      const matrixLength = this.matrixForm.value.matrixLength;
      const matrixHeight = this.matrixForm.value.matrixHeight;

      this.matrix = new MyArray(matrixLength, matrixHeight);
      for (let i = 0; i < matrixHeight; i++){
        for (let j = 0; j < matrixLength; j++){
          const controlValue = this.matrixForm.value.matrixValues[i][j];
          console.log(controlValue);
          this.matrix.setValue(j, i, controlValue);

        }
        
      }
      
      this.matrixForm.reset();
      this.matrixValues.clear();
      console.log("Submit");
      console.log(this.matrix);
    }
  }


}

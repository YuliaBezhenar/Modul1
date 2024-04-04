import { Component, OnInit, Input } from '@angular/core';
import { MyArray } from 'src/app/myform/Class/MyArray';
import { CountPairsService } from 'src/app/service/count-pairs.service';

@Component({
  selector: 'app-view-pairs',
  templateUrl: './view-pairs.component.html',
  styleUrls: ['./view-pairs.component.scss'],
})
export class ViewPairsComponent  implements OnInit {

  @Input() matrix: MyArray = new MyArray(2, 2);



  constructor(private countService: CountPairsService) { }

  n: number = 0;
  count(matrix: MyArray) {
    this.n = this.countService.countAdjacentPairs(matrix);
  }


  ngOnInit() {}

}

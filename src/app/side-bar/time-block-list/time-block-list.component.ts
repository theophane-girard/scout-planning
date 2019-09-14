import { Component, OnInit } from '@angular/core';
import { TimeBlock } from 'src/app/models/time-block';
import { CoreFunctionService } from 'src/app/core/core-function.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'time-block-list',
  templateUrl: './time-block-list.component.html',
  styleUrls: ['./time-block-list.component.scss']
})
export class TimeBlockListComponent implements OnInit {
  timeBlocks: TimeBlock[] = []
  changes: any;
  constructor() { }

  ngOnInit() {
    this.timeBlocks = [
      {
        duration: 0.25
      },
      {
        duration: 0.5
      },
      {
        duration: 1
      },
      {
        duration: 2
      }
    ];
    this.timeBlocks.forEach(bloc => {
      bloc.label = CoreFunctionService.time_convert(bloc.duration)
    });
  }

  insertTimeBlock(tmpTimeBlock: TimeBlock, index: number) {
    if (tmpTimeBlock instanceof TimeBlock) {
      this.timeBlocks.splice(index, 0, tmpTimeBlock)
    } else {
      console.error('tmpTimeBlock is not a valid TimeBlock', tmpTimeBlock);
    }
  }


}

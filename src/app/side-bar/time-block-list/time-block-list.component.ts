import { Component, OnInit } from '@angular/core';
import { TimeBlock } from 'src/app/models/time-block';
import { CoreFunctionService } from 'src/app/core/core-function.service';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'time-block-list',
  templateUrl: './time-block-list.component.html',
  styleUrls: ['./time-block-list.component.scss']
})
export class TimeBlockListComponent implements OnInit {
  timeBlocks: TimeBlock[] = []
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

  /**
   * insert in timeblocks list, last inserted element
   * @param tmpTimeBlock TimeBlock
   * @param index number
   */
  public insertTimeBlock(tmpTimeBlock: TimeBlock, index: number) {
    if (tmpTimeBlock.duration) {

      if (tmpTimeBlock.label) {

        this.timeBlocks.splice(index, 0, tmpTimeBlock)
      } else {
        console.error('tmpTimeBlock is not a valid TimeBlock', tmpTimeBlock);
      }
    } else {
      console.error('tmpTimeBlock is not a valid TimeBlock', tmpTimeBlock);
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)
    }
  }
}

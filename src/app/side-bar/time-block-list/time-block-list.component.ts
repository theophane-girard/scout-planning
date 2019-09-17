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

  /**
   * delete duplicate timeblock in list
   */
  public deleteDuplicate() : void {
    this.timeBlocks = this.timeBlocks.filter((thing, index, self) =>
      index === self.findIndex((t) => (
        t.duration === thing.duration && t.label === thing.label
      ))
    )
  }

  public resetTimeBlockList(event: TimeBlock, index: number) {
    if (this.timeBlocks.length < 4) {
      let tmpTimeBlock: TimeBlock = {
        duration: event.duration,
        label: event.label
      }
      this.insertTimeBlock(tmpTimeBlock, index)
    } else if (this.timeBlocks.length > 4) {
      this.deleteDuplicate()
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

      this.resetTimeBlockList(event.container.data[event.currentIndex], event.previousIndex)
    }
  }
}

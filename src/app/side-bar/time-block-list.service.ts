import { Injectable } from '@angular/core';
import { TimeBlock } from '../models/time-block';
import { CoreFunctionService } from 'src/app/core/core-function.service';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TimeBlockListService {

  private timeBlocks: TimeBlock[] = []
  public $timeBlock: Subject<TimeBlock[]> = new Subject<TimeBlock[]>()

  constructor() {
    this.initList()
  }

  initList() {
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
    this.notifyChanges()
  }

  public setTimeBlockList(timeBlockList: TimeBlock[]) {
    this.timeBlocks = timeBlockList
    this.$timeBlock.next(this.timeBlocks.slice())
  }

  public notifyChanges() { 
    this.$timeBlock.next(this.timeBlocks.slice())
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
      let tmpDuration = event.duration,
      tmpLabel = event.label,
      tmpTimeBlock: TimeBlock = {
        duration: tmpDuration,
        label: tmpLabel
      }
      this.insertTimeBlock(tmpTimeBlock, index)
    } else if (this.timeBlocks.length > 4) {
      this.deleteDuplicate()
    }
    this.notifyChanges()
  }

  deleteTimeBlockByDuration (duration: number) {
    this.timeBlocks = this.timeBlocks.filter(tb => tb.duration !== duration)
    this.notifyChanges()
  }
}

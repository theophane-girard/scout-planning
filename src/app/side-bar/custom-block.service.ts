import { Injectable } from '@angular/core';
import { TimeBlock } from '../models/time-block';
import { Subject } from 'rxjs';
import { CoreFunctionService } from '../core/core-function.service';
import { TimeBlockListService } from './time-block-list.service';

@Injectable({
  providedIn: 'root'
})
export class CustomBlockService extends TimeBlockListService {

  constructor() { 
    super()
    this.initCustomBlock()
  }
  
  initCustomBlock() {
    this.setTimeBlockList([
      {
        duration: 1.5
      }
    ])
    this.timeBlocks.forEach(bloc => {
      bloc.label = CoreFunctionService.time_convert(bloc.duration)
    });
    this.maxBlocks = this.timeBlocks.length
  }

  notifyCustomBlocksChanged() {
    this.$timeBlock.next(this.timeBlocks.slice())
  }

  public resetTimeBlockList(event: TimeBlock, index: number) {
    if (this.timeBlocks.length < 1) {
      let tmpDuration = event.duration,
      tmpLabel = event.label,
      tmpTimeBlock: TimeBlock = {
        duration: tmpDuration,
        label: tmpLabel
      }
      this.insertTimeBlock(tmpTimeBlock, index)
    } else if (this.timeBlocks.length > 1) {
      this.deleteDuplicate()
    }
    this.notifyChanges()
  }
}

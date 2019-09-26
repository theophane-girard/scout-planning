import { Injectable } from '@angular/core';
import { TimeBlock } from '../models/time-block';
import { Subject } from 'rxjs';
import { CoreFunctionService } from '../core/core-function.service';
import { TimeBlockListService } from './time-block-list.service';

@Injectable({
  providedIn: 'root'
})
export class CustomBlockService extends TimeBlockListService {

  private customBlocks: TimeBlock[] = []
  public $customBlocks: Subject<TimeBlock[]> = new Subject<TimeBlock[]>()

  constructor() { 
    super()
    this.initCustomBlock()
  }
  
  initCustomBlock() {
    this.customBlocks = [
      {
        duration: 1.5
      }
    ]
    this.customBlocks.forEach(bloc => {
      bloc.label = CoreFunctionService.time_convert(bloc.duration)
    });
  }

  notifyCustomBlocksChanged() {
    this.$customBlocks.next(this.customBlocks.slice())
  }

  public resetTimeBlockList(event: TimeBlock, index: number) {
    if (this.customBlocks.length < 1) {
      let tmpDuration = event.duration,
      tmpLabel = event.label,
      tmpTimeBlock: TimeBlock = {
        duration: tmpDuration,
        label: tmpLabel
      }
      this.insertTimeBlock(tmpTimeBlock, index)
    } else if (this.customBlocks.length > 1) {
      this.deleteDuplicate()
    }
    this.notifyChanges()
  }
}

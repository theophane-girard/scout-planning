import { Component, OnInit } from '@angular/core';
import { TimeBlock } from 'src/app/models/time-block';
import { CoreFunctionService } from 'src/app/core/core-function.service';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { TimeBlockListService } from '../time-block-list.service';
import { LANG } from "../../core/lang";

@Component({
  selector: 'time-block-list',
  templateUrl: './time-block-list.component.html',
  styleUrls: ['./time-block-list.component.scss']
})
export class TimeBlockListComponent implements OnInit {
  timeBlocks: TimeBlock[] = []
  readonly LANG= LANG

  constructor(private timeBlockListService: TimeBlockListService) { }

  ngOnInit() {
    this.timeBlockListService.$timeBlock.subscribe(timeBlocks => this.timeBlocks = timeBlocks)
    this.timeBlockListService.notifyChanges()
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
      this.timeBlockListService.setTimeBlockList(this.timeBlocks)
      this.timeBlockListService.resetTimeBlockList(event.container.data[event.currentIndex], event.previousIndex)
    }
  }
}

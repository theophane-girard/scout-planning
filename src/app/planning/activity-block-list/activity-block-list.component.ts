import { Component, OnInit, Output } from '@angular/core';
import { ActivityBlock } from 'src/app/models/activity-block';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CoreFunctionService } from '../../core/core-function.service';
import { TimeBlock } from 'src/app/models/time-block';
import { TimeBlockListService } from 'src/app/side-bar/time-block-list.service';

@Component({
  selector: 'activity-block-list',
  templateUrl: './activity-block-list.component.html',
  styleUrls: ['./activity-block-list.component.scss']
})
export class ActivityBlockListComponent implements OnInit {
  activityBlocks: ActivityBlock[] = []
  constructor(private timeBlockListService: TimeBlockListService) { }

  ngOnInit() {
    this.activityBlocks = [
      {
        activities: [],
        label: 'Samedi'
      },
      {
        activities: [],
        label: 'Dimanche'
      }
    ]
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
        this.timeBlockListService.resetTimeBlockList(event.container.data[event.currentIndex], event.previousIndex)
    }
  }

  time_convert(num) {
    let result = CoreFunctionService.time_convert(num)
    return result
  }
}

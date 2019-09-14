import { Component, OnInit, ViewChild, AfterViewInit, QueryList } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TimeBlock } from './models/time-block';
import { ActivityBlock } from './models/activity-block';
import { CoreFunctionService } from './core/core-function.service';
import { TimeBlockListComponent } from './side-bar/time-block-list/time-block-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('timeBlockList', { static: false }) timeBlockList: TimeBlockListComponent
  activityBlocks: ActivityBlock[] = []
  doHideTimeBlock: boolean = true;

  ngOnInit(): void {

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
      // if (doInsertTimeBlock) {
        let tmpTimeBlock: TimeBlock = {
          duration: event.previousContainer.data[event.previousIndex].duration,
          label: event.previousContainer.data[event.previousIndex].label
        }
        this.timeBlockList.insertTimeBlock(tmpTimeBlock, event.previousIndex)
      // }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)

      if (event.container.data.length === 0) {

      }
    }
  }

  time_convert(num) {
    let result = CoreFunctionService.time_convert(num)
    return result
  }
}

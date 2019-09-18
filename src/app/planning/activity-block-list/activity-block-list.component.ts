import { Component, OnInit, Output } from '@angular/core';
import { ActivityBlock } from 'src/app/models/activity-block';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CoreFunctionService } from '../../core/core-function.service';
import { TimeBlockListService } from 'src/app/side-bar/time-block-list.service';
import { MatDialog } from '@angular/material/dialog';
import { StartHourDialog } from 'src/app/dialogs/start-hour-dialog';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'activity-block-list',
  templateUrl: './activity-block-list.component.html',
  styleUrls: ['./activity-block-list.component.scss']
})
export class ActivityBlockListComponent implements OnInit {
  
  activityBlocks: ActivityBlock[] = []

  constructor(private timeBlockListService: TimeBlockListService, public dialog: MatDialog) { }

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

  drop(event: CdkDragDrop<any[]>, activityBlock: ActivityBlock) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.data.length === 0) {
        this.openDialog(activityBlock)
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)        
        this.timeBlockListService.resetTimeBlockList(event.container.data[event.currentIndex], event.previousIndex)
      this.updateActivityHours(activityBlock)
    }
  }

  time_convert(num) {
    let result = CoreFunctionService.time_convert(num)
    return result
  }

  /**
   * 
   * @param activityBlock ActivityBlock
   */
  openDialog(activityBlock: ActivityBlock): void {
    const dialogRef = this.dialog.open(StartHourDialog, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      activityBlock.startHour = result
      this.updateActivityHours(activityBlock)
    });
  }

  /**
   * update activities list hour
   * @param activityBlock ActivityBlock
   */
  updateActivityHours(activityBlock: ActivityBlock) {
    activityBlock.activities.forEach((activity, index) => {
      if (index === 0) {
        activity.startHour = JSON.parse(JSON.stringify(activityBlock.startHour))
        activity.endHour = JSON.parse(JSON.stringify(activityBlock.startHour + activity.duration))
      } else {
        activity.startHour = JSON.parse(JSON.stringify(activityBlock.activities[index-1].endHour))
        activity.endHour = JSON.parse(JSON.stringify(activity.startHour + activity.duration))
      }
    })
  }
}

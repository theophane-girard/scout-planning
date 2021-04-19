import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivityBlock } from 'src/app/models/activity-block';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CoreFunctionService } from '../../core/core-function.service';
import { TimeBlockListService } from 'src/app/planning/time-block-list.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivityDescriptionDialog } from 'src/app/dialogs/activity-description-dialog/activity-description-dialog';
import { Activity } from 'src/app/models/activity';
import { CustomBlockService } from 'src/app/planning/custom-block.service';
import { ActivityService } from '../activities.service';
import { LANG } from "../../core/lang";
import { DisplaySettingsService } from '../display-settings.service';

@Component({
  selector: 'activity-block-list',
  templateUrl: './activity-block-list.component.html',
  styleUrls: ['./activity-block-list.component.scss']
})
export class ActivityBlockListComponent implements OnInit {

  activityBlocks: ActivityBlock[] = []
  readonly LANG = LANG
  @Input() isPreview: boolean = false
  showMaterial: boolean
  showActDuration: boolean

  constructor(
    private timeBlockListService: TimeBlockListService,
    public dialog: MatDialog,
    private customBlockService: CustomBlockService,
    private activityService: ActivityService,
    private displaySettingService: DisplaySettingsService
  ) { }

  ngOnInit() {
    this.activityService.$activityBlocks.subscribe(actb => this.activityBlocks = actb)
    this.activityService.notifyChanges()
    this.displaySettingService.$showActDuration.subscribe(value => this.showActDuration = value)
    this.displaySettingService.$showMaterial.subscribe(value => this.showMaterial = value)
    this.displaySettingService.notifyChanges()
  }

  /**
   * event triggered when an element is dropped in an activityBlock (ex samedi)
   * @param event CdkDragDrop
   * @param activityBlock ActivityBlock
   */
  drop(event: CdkDragDrop<any[]>, activityBlock: ActivityBlock): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)
      this.openActivityDescDialog(activityBlock, event.container.data[event.currentIndex], event.currentIndex)
      this.customBlockService.deleteTimeBlockByDuration(event.container.data[event.currentIndex].duration)
      this.customBlockService.resetTimeBlockList(event.container.data[event.currentIndex], event.previousIndex)
      this.timeBlockListService.deleteTimeBlockByDuration(event.container.data[event.currentIndex].duration)
      this.timeBlockListService.resetTimeBlockList(event.container.data[event.currentIndex], event.previousIndex)
    }
    this.updateActivityHours(activityBlock)
    this.activityService.setActivityBlocks(this.activityBlocks)
    this.activityService.notifyChanges()
  }

  /**
   * convert number into string hour
   * @param num 
   */
  time_convert(num: number): string {
    let result = CoreFunctionService.numberToTime(num)
    return result
  }

  /**
   * 
   * @param activityBlock ActivityBlock
   */
  openActivityDescDialog(activityBlock: ActivityBlock, activity: Activity, index: number = null): void {
    let tmpData: any = {...activity}
    tmpData.isFirst = index === 0 ? true : false
    tmpData.activityBlock = activityBlock
    const dialogRef = this.dialog.open(ActivityDescriptionDialog, {
      width: '500px',
      data: tmpData,
      disableClose: tmpData.isFirst
    });

    dialogRef.afterClosed().subscribe(act => {
      activity.description = act.description
      activity.duration = act.duration
      if (act.materials) {
        activity.materials = act.materials
      }
      if (act.startHourToNumber) {
        activityBlock.startHour = act.startHourToNumber
      }
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
        activity.startHour = { ...activityBlock }.startHour
        activity.endHour = { ...activityBlock }.startHour + { ...activity }.duration
      } else {
        activity.startHour = { ...activityBlock }.activities[index - 1].endHour
        activity.endHour = { ...activity }.startHour + { ...activity }.duration
      }
    })
  }
}

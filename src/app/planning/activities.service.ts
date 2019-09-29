import { Injectable } from '@angular/core';
import { ActivityBlock } from '../models/activity-block';
import { Subject } from 'rxjs';
import { LANG } from '../core/lang';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  readonly LANG = LANG
  private activityBlocks: ActivityBlock[]
  public $activityBlocks: Subject<ActivityBlock[]> = new Subject<ActivityBlock[]>()

  constructor() {
    this.activityBlocks = [
      {
        activities: [],
        label: LANG.GENERAL.SATURDAY_LABEL
      },
      {
        activities: [],
        label: LANG.GENERAL.SUNDAY_LABEL
      }
    ]
  }

  notifyChanges() {
    this.$activityBlocks.next(this.activityBlocks.slice())
  }

  setActivityBlocks(actB: ActivityBlock[]) {
    this.activityBlocks = actB
    this.notifyChanges()
  }
}

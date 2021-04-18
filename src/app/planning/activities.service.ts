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
  private saturday = {
    activities: [],
    label: LANG.GENERAL.SATURDAY_LABEL
  }
  private sunday = {
    activities: [],
    label: LANG.GENERAL.SUNDAY_LABEL
  }

  constructor() {
    this.activityBlocks = []
  }

  notifyChanges() {
    this.$activityBlocks.next(this.activityBlocks.slice())
  }

  setActivityBlocks(actB: ActivityBlock[]) {
    this.activityBlocks = actB
    this.notifyChanges()
  }

  setDays(nb) {
    if (nb !== 1) {
      this.activityBlocks = [
        this.saturday,
        this.sunday
      ]
    } else {
      this.activityBlocks = [
        this.sunday
      ]
    }
    this.notifyChanges()
  }

  getDaysNumber() : number {
    return this.activityBlocks.length
  }
}

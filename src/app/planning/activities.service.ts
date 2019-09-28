import { Injectable } from '@angular/core';
import { ActivityBlock } from '../models/activity-block';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private activityBlocks: ActivityBlock[]
  public $activityBlocks: Subject<ActivityBlock[]> = new Subject<ActivityBlock[]>()

  constructor() {
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

  notifyChanges() {
    this.$activityBlocks.next(this.activityBlocks.slice())
  }

  setActivityBlocks(actB: ActivityBlock[]) {
    this.activityBlocks = actB
    this.notifyChanges()
  }
}

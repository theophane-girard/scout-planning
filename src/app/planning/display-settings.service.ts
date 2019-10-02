import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplaySettingsService {
  private showMaterial: boolean
  public $showMaterial: Subject<boolean> = new Subject<boolean>()
  private showActDuration: boolean
  public $showActDuration: Subject<boolean> = new Subject<boolean>()

  constructor() {
    this.showMaterial = true
    this.showActDuration = true
  }

  notifyChanges() {
    this.$showMaterial.next(this.showMaterial)
    this.$showActDuration.next(this.showActDuration)
  }

  updateShowMaterial(value: boolean) {
    this.showMaterial = value
    this.notifyChanges()
  }

  updateShowActDuration(value: boolean) {
    this.showActDuration = value
    this.notifyChanges()
  }
}

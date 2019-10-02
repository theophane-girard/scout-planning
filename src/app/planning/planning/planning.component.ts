import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/app/core/lang';
import { DisplaySettingsService } from '../display-settings.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  readonly LANG = LANG
  showMaterial: boolean
  showActDuration: boolean

  constructor(private displaySettingService: DisplaySettingsService) { }

  ngOnInit() {
    this.displaySettingService.$showActDuration.subscribe(value => this.showActDuration = value)
    this.displaySettingService.$showMaterial.subscribe(value => this.showMaterial = value)
    this.displaySettingService.notifyChanges()
  }

  updateShowMaterial() {
    this.displaySettingService.updateShowMaterial(this.showMaterial)
  }

  updateShowActDuration() {
    this.displaySettingService.updateShowActDuration(this.showActDuration)
  }
}

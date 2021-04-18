import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/app/core/lang';
import { DisplaySettingsService } from '../display-settings.service';
import { MatDialog } from '@angular/material/dialog';
import { InitDialog } from 'src/app/dialogs/init-dialog/init-dialog';
import { ActivityService } from '../activities.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  readonly LANG = LANG
  showMaterial: boolean
  showActDuration: boolean

  constructor(
    private displaySettingService: DisplaySettingsService,
    public dialog: MatDialog,
    private actBService: ActivityService,
  ) { }

  ngOnInit() {
    this.displaySettingService.$showActDuration.subscribe(value => this.showActDuration = value)
    this.displaySettingService.$showMaterial.subscribe(value => this.showMaterial = value)
    this.displaySettingService.notifyChanges()

    if (this.actBService.getDaysNumber() === 0) {
      const dialogRef = this.dialog.open(InitDialog, {
        width: '500px',
        disableClose: true
      });
    }
  }

  updateShowMaterial() {
    this.displaySettingService.updateShowMaterial(this.showMaterial)
  }

  updateShowActDuration() {
    this.displaySettingService.updateShowActDuration(this.showActDuration)
  }
}

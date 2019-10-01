import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityBlockListComponent } from './activity-block-list/activity-block-list.component';
import { MaterialModule } from '../material.module';
import { StartHourDialog } from '../dialogs/start-hour/start-hour-dialog';
import { FormsModule } from '@angular/forms';
import { ActivityDescriptionDialog } from '../dialogs/activity-description-dialog/activity-description-dialog';
import { TimeBlockListComponent } from './time-block-list/time-block-list.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { PlanningComponent } from './planning/planning.component';
import { CustomBlockComponent } from './custom-block/custom-block.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ActivityBlockListComponent, 
    StartHourDialog, 
    ActivityDescriptionDialog,
    TimeBlockListComponent,
    SettingsMenuComponent,
    PlanningComponent,
    CustomBlockComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  entryComponents: [
    StartHourDialog,
    ActivityDescriptionDialog
  ],
  exports: [
    ActivityBlockListComponent,
    PlanningComponent
  ]
})
export class PlanningModule { }

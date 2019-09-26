import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityBlockListComponent } from './activity-block-list/activity-block-list.component';
import { MaterialModule } from '../material.module';
import { StartHourDialog } from '../dialogs/start-hour/start-hour-dialog';
import { FormsModule } from '@angular/forms';
import { ActivityDescriptionDialog } from '../dialogs/activity-description-dialog/activity-description-dialog';

@NgModule({
  declarations: [
    ActivityBlockListComponent, 
    StartHourDialog, 
    ActivityDescriptionDialog
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    StartHourDialog,
    ActivityDescriptionDialog
  ],
  exports: [ActivityBlockListComponent]
})
export class PlanningModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityBlockListComponent } from './activity-block-list/activity-block-list.component';
import { MaterialModule } from '../material.module';
import { StartHourDialog } from '../dialogs/start-hour-dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ActivityBlockListComponent, StartHourDialog],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    StartHourDialog,
  ],
  exports: [ActivityBlockListComponent]
})
export class PlanningModule { }

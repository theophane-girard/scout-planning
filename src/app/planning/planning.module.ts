import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityBlockListComponent } from './activity-block-list/activity-block-list.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivityDescriptionDialog } from '../dialogs/activity-description-dialog/activity-description-dialog';
import { TimeBlockListComponent } from './time-block-list/time-block-list.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { PlanningComponent } from './planning/planning.component';
import { CustomBlockComponent } from './custom-block/custom-block.component';
import { RouterModule } from '@angular/router';
import { InitDialog } from '../dialogs/init-dialog/init-dialog';

@NgModule({
  declarations: [
    ActivityBlockListComponent,
    ActivityDescriptionDialog,
    TimeBlockListComponent,
    SettingsMenuComponent,
    PlanningComponent,
    CustomBlockComponent,
    InitDialog,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ActivityDescriptionDialog,
    InitDialog,
  ],
  exports: [
    ActivityBlockListComponent,
    PlanningComponent
  ]
})
export class PlanningModule { }

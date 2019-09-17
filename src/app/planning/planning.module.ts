import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityBlockListComponent } from './activity-block-list/activity-block-list.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [ActivityBlockListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ActivityBlockListComponent]
})
export class PlanningModule { }

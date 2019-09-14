import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeBlockListComponent } from './time-block-list/time-block-list.component';
import { MaterialModule } from "../material.module";


@NgModule({
  declarations: [TimeBlockListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[TimeBlockListComponent]
})
export class SideBarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeBlockListComponent } from './time-block-list/time-block-list.component';
import { MaterialModule } from "../material.module";
import { CustomBlockComponent } from './custom-block/custom-block.component';

@NgModule({
  declarations: [
    TimeBlockListComponent, 
    CustomBlockComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TimeBlockListComponent,
    CustomBlockComponent
  ]
})
export class SideBarModule { }

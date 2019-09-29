import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material.module";
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { PdfComponent } from './pdf/pdf.component';


@NgModule({
  declarations: [SettingsMenuComponent, PdfComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    SettingsMenuComponent
  ]
})
export class SettingsModule { }

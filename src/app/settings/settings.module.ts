import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material.module";
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';


@NgModule({
  declarations: [SettingsMenuComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    SettingsMenuComponent
  ]
})
export class SettingsModule { }

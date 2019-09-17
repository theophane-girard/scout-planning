import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { CoreModule } from './core/core.module';
import { SideBarModule } from './side-bar/side-bar.module';
import { PlanningModule } from './planning/planning.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SideBarModule,
    PlanningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

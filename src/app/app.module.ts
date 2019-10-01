import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { CoreModule } from './core/core.module';
import { PlanningModule } from './planning/planning.module';
import { PdfPreviewComponent } from './pdf/pdf-preview/pdf-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    PlanningModule,
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

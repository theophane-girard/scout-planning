import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { CoreModule } from './core/core.module';
import { PlanningModule } from './planning/planning.module';
import { PdfModule } from './pdf/pdf.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginActivate } from './authentification/guards/login-activate';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    PlanningModule,
    PdfModule,
    AuthentificationModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [LoginActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }

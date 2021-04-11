import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfPreviewComponent } from './pdf-preview/pdf-preview.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { PlanningModule } from '../planning/planning.module';

@NgModule({
  declarations: [
    PdfPreviewComponent
  ],
  imports: [
    CommonModule,
    PDFExportModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    PlanningModule,
  ],
  exports: [
    PdfPreviewComponent
  ]
})
export class PdfModule { }

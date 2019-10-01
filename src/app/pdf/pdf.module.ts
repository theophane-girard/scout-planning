import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfPreviewComponent } from './pdf-preview/pdf-preview.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PdfPreviewComponent
  ],
  imports: [
    CommonModule,
    PDFExportModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    PdfPreviewComponent
  ]
})
export class PdfModule { }

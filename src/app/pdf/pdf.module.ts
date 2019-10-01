import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfPreviewComponent } from './pdf-preview/pdf-preview.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    PdfPreviewComponent
  ],
  imports: [
    CommonModule,
    PDFExportModule,
    BrowserAnimationsModule
  ],
  exports: [
    PdfPreviewComponent
  ]
})
export class PdfModule { }

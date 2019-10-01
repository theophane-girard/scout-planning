import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPreviewComponent } from './pdf-preview.component';
import { CommonModule } from '@angular/common';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';

describe('PdfPreviewComponent', () => {
  let component: PdfPreviewComponent;
  let fixture: ComponentFixture<PdfPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PdfPreviewComponent
      ],
      imports: [
        CommonModule,
        PDFExportModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPreviewComponent } from './pdf-preview.component';
import { CommonModule } from '@angular/common';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { ActivityBlockListComponent } from 'src/app/planning/activity-block-list/activity-block-list.component';
import { ActivityService } from 'src/app/planning/activities.service';
import { MaterialModule } from 'src/app/material.module';

describe('PdfPreviewComponent', () => {
  let component: PdfPreviewComponent;
  let fixture: ComponentFixture<PdfPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PdfPreviewComponent,
        ActivityBlockListComponent
      ],
      imports: [
        CommonModule,
        PDFExportModule,
        MaterialModule
      ],
      providers: [ActivityService]
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

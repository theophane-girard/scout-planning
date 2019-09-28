import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityBlockListComponent } from './activity-block-list.component';
import { StartHourDialog } from 'src/app/dialogs/start-hour/start-hour-dialog';
import { ActivityDescriptionDialog } from 'src/app/dialogs/activity-description-dialog/activity-description-dialog';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';

describe('ActivityBlockListComponent', () => {
  let component: ActivityBlockListComponent;
  let fixture: ComponentFixture<ActivityBlockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActivityBlockListComponent, 
        StartHourDialog, 
        ActivityDescriptionDialog
      ],
      imports: [
        CommonModule,
        MaterialModule,
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityBlockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

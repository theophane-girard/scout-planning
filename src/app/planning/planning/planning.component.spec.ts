import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningComponent } from './planning.component';
import { ActivityBlockListComponent } from '../activity-block-list/activity-block-list.component';
import { StartHourDialog } from 'src/app/dialogs/start-hour/start-hour-dialog';
import { ActivityDescriptionDialog } from 'src/app/dialogs/activity-description-dialog/activity-description-dialog';
import { TimeBlockListComponent } from '../time-block-list/time-block-list.component';
import { SettingsMenuComponent } from '../settings-menu/settings-menu.component';
import { CustomBlockComponent } from '../custom-block/custom-block.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlanningComponent', () => {
  let component: PlanningComponent;
  let fixture: ComponentFixture<PlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActivityBlockListComponent, 
        StartHourDialog, 
        ActivityDescriptionDialog,
        TimeBlockListComponent,
        SettingsMenuComponent,
        PlanningComponent,
        CustomBlockComponent
      ],
      imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

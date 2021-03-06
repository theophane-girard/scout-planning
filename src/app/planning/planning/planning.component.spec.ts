import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningComponent } from './planning.component';
import { ActivityBlockListComponent } from '../activity-block-list/activity-block-list.component';
import { ActivityDescriptionDialog } from 'src/app/dialogs/activity-description-dialog/activity-description-dialog';
import { TimeBlockListComponent } from '../time-block-list/time-block-list.component';
import { SettingsMenuComponent } from '../settings-menu/settings-menu.component';
import { CustomBlockComponent } from '../custom-block/custom-block.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { InitDialog } from 'src/app/dialogs/init-dialog/init-dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('PlanningComponent', () => {
  let component: PlanningComponent;
  let fixture: ComponentFixture<PlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActivityBlockListComponent,
        ActivityDescriptionDialog,
        TimeBlockListComponent,
        SettingsMenuComponent,
        PlanningComponent,
        CustomBlockComponent,
        InitDialog,
      ],
      imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          ActivityDescriptionDialog,
          InitDialog,
        ],
      }
    }).compileComponents();
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMenuComponent } from './settings-menu.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

describe('SettingsMenuComponent', () => {
  let component: SettingsMenuComponent;
  let fixture: ComponentFixture<SettingsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsMenuComponent],
      imports: [
        CommonModule,
        MaterialModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

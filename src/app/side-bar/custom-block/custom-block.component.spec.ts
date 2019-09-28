import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBlockComponent } from './custom-block.component';
import { TimeBlockListComponent } from '../time-block-list/time-block-list.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';

describe('CustomBlockComponent', () => {
  let component: CustomBlockComponent;
  let fixture: ComponentFixture<CustomBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimeBlockListComponent, 
        CustomBlockComponent
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
    fixture = TestBed.createComponent(CustomBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

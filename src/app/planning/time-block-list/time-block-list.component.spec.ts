import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBlockListComponent } from './time-block-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

describe('TimeBlockListComponent', () => {
  let component: TimeBlockListComponent;
  let fixture: ComponentFixture<TimeBlockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeBlockListComponent ],
      imports: [DragDropModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeBlockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

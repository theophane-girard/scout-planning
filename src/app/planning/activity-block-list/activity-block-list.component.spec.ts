import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityBlockListComponent } from './activity-block-list.component';

describe('ActivityBlockListComponent', () => {
  let component: ActivityBlockListComponent;
  let fixture: ComponentFixture<ActivityBlockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityBlockListComponent ]
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

import { Component, OnInit, ViewChild, AfterViewInit, QueryList } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TimeBlockListService } from './side-bar/time-block-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /**
   *
   */
  constructor(private timeBlockListService: TimeBlockListService) {
  }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TimeBlock } from './models/time-block';
import { ActivityBlock } from './models/activity-block';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  timeBlocks: TimeBlock[] = []
  activityBlocks: ActivityBlock[] = []

  ngOnInit(): void {
    this.timeBlocks = [
      {
        duration: 0.25
      },
      {
        duration: 0.5
      },
      {
        duration: 1
      },
      {
        duration: 2
      }
    ];

    this.activityBlocks = [
      {
        activities: [],
        title: 'Samedi'
      },
      {
        activities: [],
        title: 'Dimanche'
      }
    ]
    
    this.timeBlocks.forEach(bloc => {
      bloc.label = this.time_convert(bloc.duration)
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timeBlocks, event.previousIndex, event.currentIndex);
  }

  time_convert(num) {
    let result: string = ""
    let hours = Math.floor(num);
    let minutes = (num - Math.floor(num)) * 60;
    if (hours > 0) {
      result += hours + 'h'
    } 
    if (minutes > 0) {
      result += minutes + 'min'
    }
    return result
  }
}

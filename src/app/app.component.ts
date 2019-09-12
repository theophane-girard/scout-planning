import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  blocs: any[] = []

  ngOnInit(): void {
    this.blocs = [
      {
        label: "",
        value: 0.1
      },
      {
        label: "",
        value: 0.5
      },
      {
        label: "",
        value: 1
      },
      {
        label: "",
        value: 2
      }
    ];
    this.blocs.forEach(bloc => {
      bloc.label = this.time_convert(bloc.value)
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.blocs, event.previousIndex, event.currentIndex);
  }

  time_convert(num) {
    
  }
}

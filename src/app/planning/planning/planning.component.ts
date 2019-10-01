import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/app/core/lang';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  readonly LANG = LANG
  constructor() { }

  ngOnInit() {
  }

}

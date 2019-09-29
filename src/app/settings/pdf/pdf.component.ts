import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivityService } from 'src/app/planning/activities.service';
import { ActivityBlock } from 'src/app/models/activity-block';
import { LANG } from 'src/app/core/lang';

@Component({
  selector: 'pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  private actB: ActivityBlock[] = []
  readonly LANG = LANG
  @ViewChild('pdf', { static: false }) public pdf

  constructor(private actBService: ActivityService) { }

  ngOnInit() {
    this.actBService.$activityBlocks.subscribe(actB => this.actB = actB)
    this.actBService.notifyChanges()
  }

}

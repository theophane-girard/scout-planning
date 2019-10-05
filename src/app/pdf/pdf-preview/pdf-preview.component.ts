import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivityService } from 'src/app/planning/activities.service';
import { ActivityBlock } from 'src/app/models/activity-block';
import { LANG } from 'src/app/core/lang';
import { Material } from 'src/app/models/material';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.scss']
})
export class PdfPreviewComponent implements OnInit {
  private actB: ActivityBlock[] = []
  private materials: Material[] = []
  readonly LANG = LANG
  @ViewChild('pdf', { static: false }) public pdf

  constructor(private actBService: ActivityService) { }

  ngOnInit() {
    this.actBService.$activityBlocks.subscribe(actB => this.actB = actB)
    this.actBService.notifyChanges()
    this.initMaterials()
  }

  initMaterials() {
    let tmpActivities: Activity[] = []
    let tmpMaterials: Material[] = []
    let tmpMat: Material
    let tmpLabel: string = ''
    let tmpAmount: number = 0

    this.actB.forEach(block => {
      block.activities.forEach(act => {
        tmpActivities.push(act)
      });
    });
    tmpActivities.forEach(act => {
      act.materials.forEach(mat => {
        tmpMaterials.push(mat)
      })
    })

    tmpMaterials.forEach(mat => {
      if (this.materials.every(mat => mat.label !== mat.label)) {
        tmpLabel = ''
        tmpAmount = 0
        tmpMaterials.filter(tmpMat => mat.label === tmpMat.label).forEach(mat => {
          tmpLabel = mat.label
          tmpAmount += mat.amount
        });
        tmpMat = {
          label: tmpLabel,
          amount: tmpAmount
        }
        this.materials.push(tmpMat)
      }
    })    
  }

  download() {
    this.pdf.saveAs('planning.pdf')
  }
}

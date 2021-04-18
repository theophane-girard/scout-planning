import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Material } from 'src/app/models/material';
import { CoreFunctionService } from 'src/app/core/core-function.service';
import { CONFIG } from 'src/app/core/config';
import { ActivityBlock } from 'src/app/models/activity-block';
import { ActivityService } from 'src/app/planning/activities.service';

export interface activityDescriptionData {
  isFirst: boolean
  duration: number
  description: string
  materials: Material[]
}

@Component({
  selector: 'init-dialog',
  templateUrl: 'init-dialog.html',
  styleUrls: ['./init-dialog.scss']
})
export class InitDialog implements OnInit {
  form: FormGroup
  isFirst: boolean = false
  CONFIG = CONFIG
  oneDay: ActivityBlock[] = [
    {
      activities: [
        {
          duration: 1,
          description: 'Activité 1',
          startHour: 14,
          endHour: 15
        },
        {
          duration: 1,
          description: 'Activité 2',
          startHour: 14,
          endHour: 15
        },
      ],
      label: 'Dimanche'
    },
  ]
  twoDays: ActivityBlock[] = [
    {
      activities: [
        {
          duration: 1,
          description: 'Activité 1',
          startHour: 14,
          endHour: 15
        },
        {
          duration: 1,
          description: 'Activité 2',
          startHour: 14,
          endHour: 15
        },
      ],
      label: 'Samedi'
    },
    {
      activities: [
        {
          duration: 1,
          description: 'Activité 1',
          startHour: 14,
          endHour: 15
        },
      ],
      label: 'Dimanche'
    }
  ]

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InitDialog>,
    @Inject(MAT_DIALOG_DATA) public data: activityDescriptionData,
    private activityBService: ActivityService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      daysNumber: new FormControl(1)
    })
    this.form.controls.daysNumber.valueChanges.subscribe(nb => this.activityBService.setDays(nb))
  }

  time_convert(num) {
    return CoreFunctionService.numberToTime(num)
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  updateDaysNumber(nb) {
    this.form.controls.daysNumber.setValue(nb)
  }
}
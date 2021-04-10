import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Material } from 'src/app/models/material';
import { CoreFunctionService } from 'src/app/core/core-function.service';
import { CONFIG } from 'src/app/core/config';

export interface activityDescriptionData {
  isFirst: boolean
  duration: number
  description: string
  materials: Material[]
}

@Component({
  selector: 'activity-description-dialog',
  templateUrl: 'activity-description-dialog.html',
  styleUrls: ['./activity-description-dialog.scss']
})
export class ActivityDescriptionDialog implements OnInit {
  form: FormGroup
  isFirst: boolean = false
  CONFIG = CONFIG
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ActivityDescriptionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: activityDescriptionData,
  ) { }

  ngOnInit(): void {
    let materials: any[] = this.initMaterials()
    this.form = this.fb.group({
      duration: [this.data.duration, [Validators.required]],
      description: [this.data.description, []],
      materials: this.fb.array(materials)
    });
    this.isFirst = this.data.isFirst

    if (this.isFirst === true) {
      this.form.addControl('startHour', new FormControl(this.getStartHour(this.data), Validators.required))
      this.form.addControl('startHourToNumber', new FormControl(null))
    }
  }

  getStartHour(data): any {
    let result: string = this.CONFIG.defaultStartHour
    if (data.activityBlock.startHour) {
      result = CoreFunctionService.numberToTimeString(data.activityBlock.startHour)
    }
    return result
  }

  initMaterials(): any[] {
    let materials: any = []
    if (this.data.materials) {
      this.data.materials.forEach(mat => {
        let tmpFormControl = {
          label: new FormControl(mat.label, [Validators.required]),
          amount: new FormControl(mat.amount, [Validators.required])
        }
        materials.push(this.fb.group(tmpFormControl))
      })
    } else {
      materials = [this.createItem()]
    }
    return materials
  }

  save(): void {
    if (this.form.controls.startHour) {
      this.form.controls.startHourToNumber.setValue(CoreFunctionService.timeToNumber(this.form.controls.startHour.value))
    }
    this.dialogRef.close(this.form.value);
  }

  // onNoClick(): void {
  //     this.dialogRef.close();
  // }

  getMaterials(): FormArray {
    return this.form.get('materials') as FormArray;
  }

  createItem() {
    return this.fb.group({
      label: new FormControl('', [Validators.required]),
      amount: new FormControl(1, [Validators.required])
    })
  }

  onAddMaterial() {
    this.getMaterials().push(this.createItem());
  }

  deleteMaterial(index: number) {
    this.getMaterials().removeAt(index)
  }

  convertToHour(value: number): string {
    return CoreFunctionService.numberToTime(value)
  }
}
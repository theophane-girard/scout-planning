import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

export interface activityDescriptionData {
    description: string;
}

@Component({
    selector: 'activity-description-dialog',
    templateUrl: 'activity-description-dialog.html',
    styleUrls: ['./activity-description-dialog.scss']
})
export class ActivityDescriptionDialog implements OnInit {
    form: FormGroup
    description: string
    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<ActivityDescriptionDialog>,
        @Inject(MAT_DIALOG_DATA) public data: activityDescriptionData
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            description: [this.description, []],
            materials: this.fb.array([
                this.fb.group({
                    description: '',
                    amount: 1
                })
            ])
        });
    }

    save(): void {
        this.dialogRef.close(this.form.value);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    getMaterials(): FormArray {
        return this.form.get('materials') as FormArray;
    }

    createItem() {
        return this.fb.group({
            description: '',
            amount: 1
        });
    }

    onAddMaterial() {
        // const newMaterialControl = this.fb.control(null, Validators.required);
        this.getMaterials().push(this.createItem());
    }
}
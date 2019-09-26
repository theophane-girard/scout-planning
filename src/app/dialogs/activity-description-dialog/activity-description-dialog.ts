import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface activityDescriptionData {
    description: string;
}

@Component({
    selector: 'activity-description-dialog',
    templateUrl: 'activity-description-dialog.html',
    styleUrls: ['./activity-description-dialog.scss']
})
export class ActivityDescriptionDialog {

    constructor(
        public dialogRef: MatDialogRef<ActivityDescriptionDialog>,
        @Inject(MAT_DIALOG_DATA) public data: activityDescriptionData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
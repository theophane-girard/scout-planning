import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface startHourData {
    Hour: number;
}

@Component({
    selector: 'start-hour-dialog',
    templateUrl: 'start-hour-dialog.html',
})
export class StartHourDialog {

    constructor(
        public dialogRef: MatDialogRef<StartHourDialog>,
        @Inject(MAT_DIALOG_DATA) public data: startHourData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
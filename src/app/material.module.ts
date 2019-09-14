import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
    imports:
        [
            MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            DragDropModule,
            FlexLayoutModule,
            MatDialogModule,
            MatSliderModule
        ],
    exports:
        [
            MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            DragDropModule,
            FlexLayoutModule,
            MatDialogModule,
            MatSliderModule
        ],
})
export class MaterialModule { }
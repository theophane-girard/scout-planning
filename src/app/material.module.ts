import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports:
        [
            MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            DragDropModule,
            FlexLayoutModule
        ],
    exports:
        [
            MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            DragDropModule,
            FlexLayoutModule
        ],
})
export class MaterialModule { }
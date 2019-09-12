import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    imports:
        [
            MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            DragDropModule
        ],
    exports:
        [
            MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            DragDropModule
        ],
})
export class MaterialModule { }
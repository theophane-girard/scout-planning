import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
    imports:
        [
            MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            DragDropModule,
            FlexLayoutModule,
            MatDialogModule,
            MatSliderModule,
            MatProgressSpinnerModule,
            MatIconModule,
            MatInputModule,
            MatMenuModule,
            MatSnackBarModule,
            PDFExportModule,
            MatCardModule,
            MatExpansionModule,
            MatSlideToggleModule,
        ],
    exports:
        [
            MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            DragDropModule,
            FlexLayoutModule,
            MatDialogModule,
            MatSliderModule,
            MatProgressSpinnerModule,
            MatIconModule,
            MatInputModule,
            MatMenuModule,
            MatSnackBarModule,
            PDFExportModule,
            MatCardModule,
            MatExpansionModule,
            MatSlideToggleModule,
        ],
})
export class MaterialModule { }
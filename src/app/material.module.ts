import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports: 
    [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule
    ],
    exports: 
    [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule
    ],
})
export class MaterialModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfPreviewComponent } from './pdf/pdf-preview/pdf-preview.component';
import { PlanningComponent } from './planning/planning/planning.component';


const routes: Routes = [
  {
    path: 'pdf', component: PdfPreviewComponent
  },
  {
    path: 'planning', component: PlanningComponent
  },
  {
    path: '', redirectTo: 'planning', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

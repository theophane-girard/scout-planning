import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfPreviewComponent } from './pdf/pdf-preview/pdf-preview.component';
import { PlanningComponent } from './planning/planning/planning.component';
import { LoginComponent } from './authentification/login/login.component';
import { LoginActivate } from './authentification/guards/login-activate';
import { PlanningListComponent } from './planning/planning-list/planning-list.component';


const routes: Routes = [
  {
    path: 'pdf', component: PdfPreviewComponent, canActivate:[LoginActivate],
  },
  {
    path: 'planning-list', component: PlanningListComponent, canActivate:[LoginActivate]
  },
  {
    path: 'plannings/:id', component:  PlanningComponent, canActivate:[LoginActivate]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: 'planning-list', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewJobsComponent } from './view-jobs.component';
const routes: Routes = [
  { path: '', component: ViewJobsComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewJobsRoutingModule { }
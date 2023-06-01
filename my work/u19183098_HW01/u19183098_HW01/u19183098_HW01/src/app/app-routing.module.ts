import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDetailsFormComponent } from './driverdetails-form/driverdetails-form.component';
import { DriverimagesFormComponent } from './driverimages-form/driverimages-form.component';
const routes: Routes = [
  { path: '', component: DriverDetailsFormComponent },
 { path: 'driverdetails-form', component: DriverDetailsFormComponent },
 { path: 'driverimages-form', component: DriverimagesFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

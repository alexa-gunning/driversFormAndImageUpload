import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverDetailsFormComponent } from './driverdetails-form/driverdetails-form.component';
import { DriverimagesFormComponent } from './driverimages-form/driverimages-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DriverDetailsFormComponent,
    DriverimagesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

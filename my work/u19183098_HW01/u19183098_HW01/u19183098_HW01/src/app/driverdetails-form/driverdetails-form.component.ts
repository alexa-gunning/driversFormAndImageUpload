import {
  AbstractControl, ValidationErrors, ValidatorFn,
  FormControl, FormGroup, Validators, MinLengthValidator
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverDetails } from '../driverdetails';

@Component({
  selector: 'app-driverdetails-form',
  templateUrl: './driverdetails-form.component.html',
  styleUrls: ['./driverdetails-form.component.css']
})

export class DriverDetailsFormComponent implements OnInit {

  driverDetailsForm: FormGroup = new FormGroup({
    fullname: new FormControl("", [Validators.required, Validators.maxLength(50),
    Validators.pattern('^[a-zA-Z ]*$')]),
    id: new FormControl("", [Validators.required, Validators.minLength(13),
    Validators.maxLength(13), this.CheckID()]),
    otp: new FormControl("", Validators.required)
  })

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onNext() {

    var isValid = false;

    if (this.driverDetailsForm.value.fullname == "") {
      this.driverDetailsForm.controls["fullname"].markAsTouched();
    }

    if (this.driverDetailsForm.value.id == "") {
      this.driverDetailsForm.controls["id"].markAsTouched();
      this.driverDetailsForm.controls["id"].setErrors({ required: true });
    }

    if (this.driverDetailsForm.value.otp == "") {
      this.driverDetailsForm.controls["otp"].markAsTouched();
    }

    if (this.driverDetailsForm.valid == true) {
      this.router.navigate(['/driverimages-form'])
    }
    else {
      return;
    }

  }

  CheckID(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      var id = control.value;
      var notvalid = true;

      if (isNaN(id)) {
        notvalid = false;
      }

      var year = id.substring(0, 2),
        month = id.substring(2, 4),
        day = id.substring(4, 6);
      var bday = new Date(year, (month - 1), day);

      if (!(((bday.getFullYear() + '').substring(2, 4) == year) && (bday.getMonth() == month - 1)
        && (bday.getDate() == day))) {
        notvalid = false;
      }

      var drivergender = parseInt(id.substring(6, 10), 10) > 5000 ? "M" : "F";

      if (id.substring(10, 11) > 1) {
        notvalid = false;
      }
      else {
        var citizenship = parseInt(id.substring(10, 11), 10) === 0 ? "C" : "F";
      }

      if (id.substring(11, 12) < 8) {
        notvalid = false;
      }

      var check = 0,
        even = false;

      for (var i = id.length - 1; i >= 0; i--) {
        var cdigit = id.charAt(i),
          ndigit = parseInt(cdigit, 10);

        if (even) {
          if ((ndigit *= 2) > 9) ndigit -= 9;
        }

        check += ndigit;
        even = !even;

      }

      if ((check % 10) !== 0) {
        notvalid = false;
      }

      return !notvalid ? { isValid: true } : null;

    }

  }

}
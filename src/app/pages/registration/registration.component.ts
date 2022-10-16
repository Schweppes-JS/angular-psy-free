import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LoadingHendler } from './../../components/loading-hendler/loading-hendler';
import { environment } from '../../../environments/environment';
import { emailRegexp as emailPattern } from 'src/constants/regexp';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private readonly http: HttpClient, private readonly router: Router, private snackBar: MatSnackBar) { }
  loadingHendler = new LoadingHendler();
  emailRegexp = emailPattern;
  registerError = '';

  registerForm = new FormGroup({
    nickname: new FormControl(null),
    lastName: new FormControl(null),
    firstName: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    repeatedPassword: new FormControl(null),
    isPsychologist: new FormControl(false)
  });

  submitRegistration() {
    if (this.registerForm.valid) {
      this.loadingHendler.start();
      this.http.post(`${environment.baseUrl}/auth/registration`, { ...this.registerForm.value }).subscribe(
        () => {
          this.loadingHendler.finish();
          this.registerError = '';
          this.router.navigate(['/authentication'], { state: { 'isRecentlyRegistered?': true } });
          this.snackBar.open('successfully registered', undefined, {
            duration: 7000,
            verticalPosition: 'top',
            panelClass: 'registration__message'
          });
        },
        ({ error }: HttpErrorResponse) => {
          this.loadingHendler.finish();
          this.registerError = error.message ?? error.errors?.[0].msg;
          console.error(this.registerError ?? 'something went wrong');
        }
      );
    }
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get nickname() {
    return this.registerForm.get('nickname');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get repeatedPassword() {
    return this.registerForm.get('repeatedPassword');
  }
  get isPsychologist() {
    return this.registerForm.get('isPsychologist');
  }
}

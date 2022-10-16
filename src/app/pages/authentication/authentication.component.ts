import { LoadingHendler } from 'src/app/components/loading-hendler/loading-hendler';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['../registration/registration.component.css']
})
export class AuthenticationComponent {
  constructor(private readonly http: HttpClient, private readonly router: Router) { }
  loadingHendler = new LoadingHendler();
  loginError = '';

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  })

  submitLogin() {
    if (this.loginForm.valid) {
      this.loadingHendler.start();
      this.http.post(`${environment.baseUrl}/auth/login`, { ...this.loginForm.value }).subscribe(
        () => {
          this.loadingHendler.finish();
          this.loginError = '';
          this.router.navigate(['/chat']);
        },
        ({ error }: HttpErrorResponse) => {
          this.loadingHendler.finish();
          this.loginError = error.message ?? error.errors?.[0].msg;
          console.error(this.loginError ?? 'something went wrong');
        }
      );
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}

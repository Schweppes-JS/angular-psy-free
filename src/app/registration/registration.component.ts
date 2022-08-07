import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { emailRegexp as emailPattern } from 'src/constants/regexp';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  emailRegexp = emailPattern;
  registerForm = new FormGroup({
    nickname: new FormControl(null,),
    email: new FormControl(null),
    password: new FormControl(null),
    repeatedPassword: new FormControl(null),
    isPsychologist: new FormControl(false),
  })

  submitRegistration() {
    console.log(this.registerForm.value)
  }

  get nickname() { return this.registerForm.get('nickname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get repeatedPassword() { return this.registerForm.get('repeatedPassword') }
  get isPsychologist() { return this.registerForm.get('isPsychologist') }

}

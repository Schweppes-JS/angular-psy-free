
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForPsychologistsComponent } from './for-psychologists/for-psychologists.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForClientsComponent } from './for-clients/for-clients.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'for-psychologists', component: ForPsychologistsComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'for-clients', component: ForClientsComponent },
  { path: '', component: MainComponent },
]


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

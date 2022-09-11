
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForPsychologistsComponent } from './pages/for-psychologists/for-psychologists.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForClientsComponent } from './pages/for-clients/for-clients.component';
import { MainComponent } from './pages/main/main.component';

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

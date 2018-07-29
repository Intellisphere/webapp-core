import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './pages/registration/registration.component';
import { LogInComponent } from './pages/login/components/login.component';

const authRoutes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

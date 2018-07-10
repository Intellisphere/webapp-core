import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { JwtAuthService } from "./jwt-auth.service";
import { RegistrationComponent } from './registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    AuthRoutingModule,
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: AuthModule,
      providers: [JwtAuthService]
    };
  }
}

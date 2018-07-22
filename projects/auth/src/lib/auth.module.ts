import { ModuleWithProviders, NgModule } from '@angular/core';
import { JwtAuthService } from "./jwt-auth.service";
import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    LoginModule,
    AuthRoutingModule
  ],
  declarations: [
  ],
  exports: [
    LoginModule
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

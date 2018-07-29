import { ModuleWithProviders, NgModule } from '@angular/core';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { JwtAuthenticationService } from "./services/jwt-authentication/jwt-authentication.service";
import { JwtAuthenticationOptions } from "./services/jwt-authentication/jwt-authentication.options";
import { AuthRoutingModule } from './auth-routing.module';
import { LogInModule } from './pages/login/login.module';
import { RegistrationComponent } from './pages/registration/registration.component';
import { getJWT } from './services/jwt-authentication/jwt-authentication.token';
import { AuthenticationService } from '@medisphere/core';

@NgModule({
  imports: [
    LogInModule,
    AuthRoutingModule,

    JwtModule
  ],
  declarations: [
    RegistrationComponent
  ],
  providers: [
  ],
  exports: [
    LogInModule
  ]
})

export class AuthModule {
  static forRoot(options: JwtAuthenticationOptions): ModuleWithProviders{
    return {
      ngModule: AuthModule,
      providers: [
        JwtHelperService,
        { provide: AuthenticationService, useClass: JwtAuthenticationService },
        { provide: JWT_OPTIONS, useValue:{
          config: {
            tokenGetter: getJWT(),
            whitelistedDomains: options.whiltelistedDomains,
            blacklistedRoutes: options.blacklistedRoutes
          }
          }}],
    };
  }
}

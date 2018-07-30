import { ModuleWithProviders, NgModule } from '@angular/core';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { JwtAuthenticationService } from "./services/jwt-authentication/jwt-authentication.service";
import { JwtAuthenticationOptions } from "./services/jwt-authentication/jwt-authentication.options";
import { AuthRoutingModule } from './auth-routing.module';
import { LogInModule } from './pages/login/login.module';
import { LogOutModule } from "./pages/logout/logout.module";
import { RegistrationComponent } from './pages/registration/registration.component';
import { getJWT } from './services/jwt-authentication/jwt-authentication.token';
import { AuthenticationService, AuthorizationService } from '@medisphere/core';

@NgModule({
  imports: [
    LogInModule,
    LogOutModule,
    AuthRoutingModule,

    JwtModule
  ],
  declarations: [
    RegistrationComponent
  ],
  providers: [
  ],
  exports: [
    LogInModule,
    LogOutModule
  ]
})

export class AuthModule {
  static forRoot(options: JwtAuthenticationOptions): ModuleWithProviders{
    return {
      ngModule: AuthModule,
      providers: [
        JwtHelperService,
        { provide: AuthenticationService, useClass: JwtAuthenticationService },
        AuthorizationService, //TODO: Implement AuthService
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

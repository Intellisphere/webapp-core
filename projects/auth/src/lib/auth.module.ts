import { ModuleWithProviders, NgModule } from '@angular/core';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { JwtAuthService } from "./jwt-auth/jwt-auth.service";
import { JwtAuthOptions } from "./jwt-auth/jwt-auth.options";
import { AuthRoutingModule } from './auth-routing.module';
import { LogInModule } from './login/login.module';
import { RegistrationComponent } from './registration/registration.component';
import { getAccessToken } from './jwt-auth/jwt-auth.token';
import { AuthService } from '@medisphere/core';

@NgModule({
  imports: [
    LogInModule,
    AuthRoutingModule,

    JwtModule
  ],
  declarations: [RegistrationComponent
  ],
  providers: [
    JwtHelperService,
    { provide: AuthService, useClass: JwtAuthService }
  ],
  exports: [
    LogInModule
  ]
})

export class AuthModule {
  static forRoot(options: JwtAuthOptions): ModuleWithProviders{
    return {
      ngModule: AuthModule,
      providers: [
        { provide: JWT_OPTIONS, useValue:{
          config: {
            tokenGetter: getAccessToken(),
            whitelistedDomains: options.whiltelistedDomains,
            blacklistedRoutes: options.blacklistedRoutes
          }
          }}],
    };
  }
}

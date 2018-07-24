import { ModuleWithProviders, NgModule } from '@angular/core';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import { JwtAuthService } from "./jwt-auth.service";
import { JwtAuthOptions } from "./jwt-auth.options";
import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './login/login.module';
import { RegistrationComponent } from "./registration/registration.component";

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    LoginModule,
    AuthRoutingModule,

    JwtModule
  ],
  declarations: [RegistrationComponent
  ],
  exports: [
    LoginModule
  ]
})

export class AuthModule {
  static forRoot(options: JwtAuthOptions): ModuleWithProviders{
    return {
      ngModule: AuthModule,
      providers: [JwtAuthService,
        { provide: JWT_OPTIONS, useValue:{
          config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: options.whiltelistedDomains,
            blacklistedRoutes: options.blacklistedRoutes
          }
          }}],
    };
  }
}

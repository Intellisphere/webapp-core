import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from '@medisphere/core';


@Injectable()
export class JwtAuthenticationService extends AuthenticationService{

  constructor(private jwtHelper : JwtHelperService) {
    super();
  }

  public isAuthenticated(): boolean{
    const token = localStorage.getItem('access_token');
    return token != null;
  }
}




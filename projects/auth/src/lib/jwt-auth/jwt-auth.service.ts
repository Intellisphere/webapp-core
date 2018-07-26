import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '@medisphere/core';


@Injectable()
export class JwtAuthService extends AuthService{

  constructor(private jwtHelper : JwtHelperService) {
    super();
  }

  public isAuthenticated(): boolean{
    const token = localStorage.getItem('access_token');
    return token != null;
  }
}




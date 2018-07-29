import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

  public isAuthenticated() : boolean {
    return true;
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

  constructor() { }

  isAuthorized(modulname: string, programName: string, permissionId: number | null = null) : boolean{
    return true;
  }
}

import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthenticationService } from "./authentication.service";
import { AuthorizationService } from "./authorization.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authenticationService: AuthenticationService, private authorizationService: AuthorizationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.authenticationService.isAuthenticated() === false){
      this.router.navigate(['login']);
      return false;
    }

    let module: string = "";
    let programName : string = "";
    //TODO: get current module and ProgramName

    return this.authorizationService.isAuthorized(module, programName);
  }

}

import { Inject, Injectable } from '@angular/core';
import { setJWT } from "../../../services/jwt-authentication/jwt-authentication.token";
import { APP_CONFIG_TOKEN, AppConfig} from "@medisphere/core";
import { LogIn } from "../models/login";

@Injectable()
export class LogInService {

  constructor(@Inject(APP_CONFIG_TOKEN) private appConfig: AppConfig) {
  }

  login(logIn: LogIn){
    let token = null;

    console.log(this.appConfig.apiEndpoint);

    if(logIn.username == 'admin' && logIn.password == 'admin'){
      console.log('login success');
      token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    }

    setJWT(null);
  }
}

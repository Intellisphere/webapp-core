import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LogIn } from '../models/login';
import { AuthService } from "@medisphere/core";
import { LogInService } from "../serivces/login.service";

@Component({
  selector: 'sphr-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LogInComponent implements OnInit {

  logIn : LogIn = {
    username : '',
    password: ''
  };

  loginForm = new FormGroup({
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'acceptPolicy': new FormControl('', Validators.requiredTrue)
  });


  constructor(private authService: AuthService, private logInService: LogInService) {
  }

  ngOnInit() {
    if(this.authService.isAuthenticated()){
      //TODO: Route to Dashboard
    }
  }

  public onSubmit() {
    this.logInService.login(this.logIn)
  }

  public  onRecoverPassword(){
    //TODO: Route to Recover password
  }
}

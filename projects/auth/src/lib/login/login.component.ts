import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LogIn } from './login';

@Component({
  selector: 'sphr-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logIn : LogIn = {
    username : '',
    password: ''
  };

  loginForm = new FormGroup({
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'acceptPolicy': new FormControl('', Validators.requiredTrue)
  });


  constructor() {
  }

  ngOnInit() {
  }

  public onSubmit() {

  }

  public  onForgottenPassword(){

  }
}

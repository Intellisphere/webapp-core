import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from "@medisphere/core";

import { LogIn } from './login';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http : HttpClient, private authService: AuthService) { }

  logIn(data : LogIn){
    const body = JSON.stringify(data);

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  logOut(){

  }
}

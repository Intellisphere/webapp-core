import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule } from "@medisphere/auth";

import { RoutingModule } from './app.routes'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AuthModule.forRoot({ whiltelistedDomains: [], blacklistedRoutes: [] }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule } from "@medisphere/auth";

import { RoutingModule } from './app.routes'
import { AppComponent } from './app.component';
import { APP_CONFIG_TOKEN, AppConfig } from '@medisphere/core';

const APP_CONFIG : AppConfig = {
  apiEndpoint: "localhost:3000",
  title: "Some Title"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AuthModule.forRoot({ whiltelistedDomains: [], blacklistedRoutes: [] }),
  ],
  providers: [
    {provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

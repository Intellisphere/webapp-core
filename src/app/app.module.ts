import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '@medisphere/core';
import { UiCoreModule } from '@medisphere/ui-core';

import { AuthModule } from "@medisphere/auth";
import { BaseModule } from "@medisphere/base";

import { RoutingModule } from './app.routes'
import { AppComponent } from './app.component';
import { APP_CONFIG_TOKEN, AppConfig } from '@medisphere/core';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

const APP_CONFIG : AppConfig = {
  apiEndpoint: "localhost:3000",
  title: "Some Title"
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,

    CoreModule,
    UiCoreModule,

    AuthModule.forRoot({ whiltelistedDomains: [], blacklistedRoutes: [] }),
    BaseModule
  ],
  providers: [
    {provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

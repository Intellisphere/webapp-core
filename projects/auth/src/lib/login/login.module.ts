import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@medisphere/core';
import { UiCoreModule } from '@medisphere/ui-core';
import { LogInComponent } from "./components/login.component";
import { LogInService } from "./serivces/login.service";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    UiCoreModule
  ],
  declarations: [
    LogInComponent
  ],
  providers: [
    LogInService
  ],
  exports: [
    LogInComponent
  ]
})
export class LogInModule { }

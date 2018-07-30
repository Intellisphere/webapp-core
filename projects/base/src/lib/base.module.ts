import { NgModule } from '@angular/core';
import { ProgramsModule } from "./pages/programs/programs.module";
import { BaseRoutingModule } from './base-routing.module';

@NgModule({
  imports: [
    ProgramsModule,
    BaseRoutingModule
  ],
  declarations: [],
  exports: [
    ProgramsModule
  ]
})
export class BaseModule { }

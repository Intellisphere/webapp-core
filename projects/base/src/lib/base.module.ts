import { NgModule } from '@angular/core';
import { ProgramComponent } from './pages/programs/components/program.component';
import {ProgramsModule} from "./pages/programs/programs.module";

@NgModule({
  imports: [
    ProgramsModule
  ],
  declarations: [],
  exports: [
    ProgramsModule
  ]
})
export class BaseModule { }

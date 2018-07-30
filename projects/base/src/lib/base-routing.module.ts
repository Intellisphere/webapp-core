import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { baseRoutes } from "./base.routes";

@NgModule({
  imports: [RouterModule.forChild(baseRoutes)],
})
export class BaseRoutingModule { }

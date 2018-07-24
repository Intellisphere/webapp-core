import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CoreModule, AuthService } from '@medisphere/core';
import { UiCoreModule } from '@medisphere/ui-core';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    UiCoreModule,
  ],
  declarations: [LoginComponent],
  providers: [AuthService],
  exports: [LoginComponent]
})
export class LoginModule { }

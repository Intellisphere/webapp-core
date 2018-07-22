import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCoreModule } from '@medisphere/ui-core';
import { LoginComponent } from './login.component';
import { AuthService } from '@medisphere/core';

@NgModule({
  imports: [
    CommonModule,
    UiCoreModule,
    AuthService
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }

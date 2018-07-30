import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from '@medisphere/core';

const appRoutes: Routes = [
  { path: '', component: MainComponent, canActivate: []},
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

export const RoutingModule = RouterModule.forRoot(appRoutes);

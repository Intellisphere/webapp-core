import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const RoutingModule = RouterModule.forRoot(appRoutes);

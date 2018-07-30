import { Routes } from '@angular/router';
import { AuthGuardService } from '@medisphere/core';
import { ProgramComponent } from "./pages/programs/components/program.component";

export const baseRoutes : Routes = [
    { path: 'base', canActivate: [AuthGuardService], children: [
          { path: 'programs', component: ProgramComponent, canActivate: [AuthGuardService] }
        ]
    }
];

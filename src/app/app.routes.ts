import { Routes } from '@angular/router';
import { CORE_PATH } from './shared/constants/routing-paths.consts';

export const appRoutes: Routes = [
  {
    path: CORE_PATH.path,
    loadChildren: () =>
      import('../app/pages/core-page/core-page.routes').then(r => r.coreRoutes),
  },
  {
    path: '**',
    redirectTo: CORE_PATH.path,
    pathMatch: 'full',
  },
];

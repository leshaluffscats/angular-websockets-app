import { Routes } from '@angular/router';
import {
  CANVAS_PATH,
  CHAT_PATH,
  EMPTY_PATH,
  MAP_PATH,
} from 'src/app/shared/constants/routing-paths.consts';
import { CorePageComponent } from './core-page.component';

export const coreRoutes: Routes = [
  {
    path: EMPTY_PATH.path,
    component: CorePageComponent,
    children: [
      {
        path: CANVAS_PATH.path,
        loadComponent: () =>
          import('../canvas-page/canvas-page.component').then(
            c => c.CanvasPageComponent,
          ),
      },
      {
        path: CHAT_PATH.path,
        loadComponent: () =>
          import('../chat-page/chat-page.component').then(
            c => c.ChatPageComponent,
          ),
      },
      {
        path: MAP_PATH.path,
        loadComponent: () =>
          import('../map-page/map-page.component').then(
            c => c.MapPageComponent,
          ),
      },
    ],
  },
];

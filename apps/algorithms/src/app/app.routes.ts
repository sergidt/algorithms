import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'backtracking'
  },
  {
    path: 'backtracking',
    loadComponent: () => import('@algorithms/backtracking').then(m => m.BacktrackingComponent)
  }
];

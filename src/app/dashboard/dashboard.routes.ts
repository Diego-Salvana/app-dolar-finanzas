import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dollars',
    loadComponent: () => import('./pages/dollars/dollars.component').then(m => m.DollarsComponent)
  },
  {
    path: 'comparator',
    loadComponent: () =>
      import('./pages/comparator/comparator.component').then(m => m.ComparatorComponent)
  }
];

export default routes;

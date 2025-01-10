import { Routes } from '@angular/router';
import { HomeMainComponent } from './home/pages/home-main/home-main.component';

export const routes: Routes = [
   {
      path: '',
      component: HomeMainComponent
   },
   {
      path: 'dashboard',
      loadComponent: () => import('./dashboard/pages/dashboard-main/dashboard-main.component')
         .then(m => m.DashboardMainComponent),

      loadChildren: () => import('./dashboard/dashboard.routes')
   },
   {
      path: '**',
      redirectTo: ''
   }
];

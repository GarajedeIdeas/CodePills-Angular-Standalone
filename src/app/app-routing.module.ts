import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'preguntas',
    loadComponent: () => import('./components/faqs/faqs.component').then(m => m.FaqsComponent)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/routes')
  }
];
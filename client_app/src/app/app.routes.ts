import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServerErrorComponent } from './pages/server-error/server-error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' },

  {
    path: 'cars',
    loadChildren: () =>
      import('./features/cars/cars.routes').then((m) => m.carsRoutes),
  },

  { path: 'not-found', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: '**', redirectTo: '/not-found' },
];

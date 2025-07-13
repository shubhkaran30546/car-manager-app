import { Routes } from '@angular/router';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarsComponent } from './cars.component';

export const carsRoutes: Routes = [
  {
    path: '',
    component: CarsComponent,
    children: [
      { path: '', component: CarsListComponent },
      { path: 'new', component: CarFormComponent, data: { modelName: 'Car' } },
      { path: ':id', component: CarDetailsComponent },
      {
        path: ':id/edit',
        component: CarFormComponent,
        data: { modelName: 'Car' },
      },
    ],
  },
];

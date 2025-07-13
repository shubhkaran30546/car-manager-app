import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './cars.component.html',
})
export class CarsComponent {}

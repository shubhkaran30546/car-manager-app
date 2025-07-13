import { Component } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/car.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CAR_TITLES } from '../../constants/car-titles';
import { NavigationButtonsComponent } from '../../../../shared/components/navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule, RouterLink, NavigationButtonsComponent],
  templateUrl: './car-details.component.html',
})
export class CarDetailsComponent {
  car!: Car;
  carProperties = CAR_TITLES;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idRouteSnapshot = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(idRouteSnapshot)) {
      this.carsService.getCar(idRouteSnapshot).subscribe((data: Car) => {
        this.car = data;
      });
    } else {
      console.error('Invalid car id');
    }
  }
}

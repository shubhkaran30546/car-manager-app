import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/car.model';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { CAR_TITLES } from '../../constants/car-titles';
import { ActionsButtonComponent } from '../../../../shared/components/actions-button/actions-button.component';
import { NavigationButtonsComponent } from '../../../../shared/components/navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ModalComponent,
    ActionsButtonComponent,
    NavigationButtonsComponent,
  ],
  templateUrl: './cars-list.component.html',
})
export class CarsListComponent implements OnInit {
  cars: Car[] = [];
  modalOpen = false;
  headerTitles = CAR_TITLES;
  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.carsService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }

  openModal(event: Event) {
    event.preventDefault();
    this.modalOpen = true;
  }

  handleDelete(id: number) {
    this.carsService.deleteCar(id).subscribe(() => {
      this.cars = this.cars.filter((car) => car.id !== id);
    });
  }

  handleCancel() {
    this.modalOpen = false;
  }
}

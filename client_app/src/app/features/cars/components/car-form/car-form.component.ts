import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarsService } from '../../services/cars.service';
import { EngineComponent } from '../engine/engine.component';
import { Car } from '../../models/car.model';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { FormService } from '../../../../shared/services/form.service';
import { NgxToastService } from '@angular-magic/ngx-toast';
import { NavigationButtonsComponent } from '../../../../shared/components/navigation-buttons/navigation-buttons.component';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    EngineComponent,
    InputComponent,
    NavigationButtonsComponent,
  ],
  templateUrl: './car-form.component.html',
})
export class CarFormComponent {
  carForm!: FormGroup;
  isEditMode = false;
  carId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private carsService: CarsService,
    private router: Router,
    private formService: FormService,
    private ngxToastService: NgxToastService
  ) {
    this.buildCarForm();
  }

  ngOnInit() {
    this.patchValuesOnEdit();
  }

  get formTitle() {
    return this.formService.getTitleMode(this.route).formTitle;
  }

  get submitButtonTitle() {
    return this.formService.getTitleMode(this.route).submitButtonTitle;
  }

  onSubmit() {
    if (this.carForm.invalid) {
      return;
    }

    const carData: Car = this.carForm.value;
    this.checkForModeOnSave(carData);
  }

  private buildCarForm() {
    this.carForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      production_year: ['', [Validators.required, Validators.min(1886)]],
    });
  }

  private checkForModeOnSave(carData: Car) {
    if (this.isEditMode) {
      this.carsService.updateCar(this.carId, carData).subscribe({
        next: (res) => {
          this.router.navigate(['/cars']);
          this.ngxToastService.success({ messages: [String(res['message'])] });
        },
        error: (err) =>
          this.ngxToastService.error({ messages: [err.statusText] }),
      });
    } else {
      this.carsService.createCar(carData).subscribe({
        next: (res) => {
          this.router.navigate(['/cars']);
          this.ngxToastService.success({ messages: [String(res['message'])] });
        },
        error: (err: any) => {
          this.ngxToastService.error({ messages: [err.statusText] });
        },
      });
    }
  }

  private patchCarValuesWithEngine(car: Car) {
    this.carForm.patchValue({
      brand: car.brand,
      model: car.model,
      price: car.price,
      production_year: car.production_year,
      engine_attributes: {
        id: car.engine?.id,
        fuel_type: car.engine?.fuel_type,
        displacement: car.engine?.displacement,
        power: car.engine?.power,
      },
    });
  }

  private patchValuesOnEdit(): void {
    const paramsId = this.formService.getParamsIdOnForm(this.route);
    this.isEditMode = this.formService.isEditMode(this.route);
    this.carId = paramsId!;
    if (this.isEditMode) {
      this.carsService.getCar(this.carId).subscribe((car: Car) => {
        this.patchCarValuesWithEngine(car);
      });
    }
  }
}

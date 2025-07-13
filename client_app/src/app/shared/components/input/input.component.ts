import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { TitleizePipe } from '../../pipes/titleize.pipe';
import { CommonModule } from '@angular/common';
import { ValidationMessagesService } from '../../../core/services/validation-messages.service';
import { ForceNumericDirective } from '../../directives/force-numeric.directive';

@Component({
  selector: 'input-field',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TitleizePipe,
    CommonModule,
    ForceNumericDirective,
  ],
  templateUrl: './input.component.html',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class InputComponent {
  @Input() controlName!: string;
  @Input() type: 'text' | 'number' | 'password' = 'text';
  @Input() step: number = 1;
  @Input() forceNumeric: boolean = false;
  @Input() placeholder?: string;

  constructor(
    private controlContainer: ControlContainer,
    private validationMessagesService: ValidationMessagesService
  ) {}

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName) as FormControl;
  }

  get validationMessage(): string {
    return this.validationMessagesService.getValidationMessage(this.control);
  }

  get placeholderValue(): string {
    return this.placeholder || `Enter ${this.controlName}`;
  }
}

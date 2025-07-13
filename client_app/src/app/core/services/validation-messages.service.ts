import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationMessagesService {
  getValidationMessage(control: FormControl): string {
    if (control.errors?.['required']) {
      return 'This field is required';
    }

    if (control.errors?.['minlength']) {
      return `This field must have at least ${control.errors['minlength'].requiredLength} characters`;
    }

    if (control.errors?.['maxlength']) {
      return `This field must have at most ${control.errors['maxlength'].requiredLength} characters`;
    }

    if (control.errors?.['pattern']) {
      return 'Invalid format';
    }

    return '';
  }
}

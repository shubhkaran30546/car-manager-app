import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  getTitleMode(
    route: ActivatedRoute,
    modelName?: string
  ): { formTitle: string; submitButtonTitle: string } {
    const name = modelName || route.snapshot.data['modelName'] || 'Entity';
    const isEditMode = this.isEditMode(route);

    return {
      formTitle: isEditMode ? `Edit ${name}` : `New ${name}`,
      submitButtonTitle: isEditMode ? `Update ${name}` : `Create ${name}`,
    };
  }

  getParamsIdOnForm(route: ActivatedRoute): number | null {
    const id = Number(route.snapshot.paramMap.get('id'));
    return !isNaN(id) ? id : null;
  }

  isEditMode(route: ActivatedRoute): boolean {
    return !!this.getParamsIdOnForm(route);
  }
}

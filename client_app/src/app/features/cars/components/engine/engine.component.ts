import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../../../shared/components/input/input.component';

@Component({
  selector: 'app-engine',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  templateUrl: './engine.component.html',
})
export class EngineComponent implements OnInit {
  engineForm!: FormGroup;
  @Input() parentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildEngineForm();
    this.parentForm.addControl('engine_attributes', this.engineForm);
  }

  private buildEngineForm(): void {
    this.engineForm = this.fb.group({
      id: '',
      fuel_type: ['', Validators.required],
      displacement: ['', [Validators.required, Validators.min(0.1)]],
      power: ['', [Validators.required, Validators.min(1)]],
    });
  }
}

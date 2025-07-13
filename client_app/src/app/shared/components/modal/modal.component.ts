import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() title: string = 'Confirm your action';
  @Input() message: string = 'Are you sure you want to delete this item?';
  @Input() isOpened: boolean = false;

  @Output() confirmed = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();

  confirm(): void {
    this.confirmed.emit();
    this.close();
  }

  close(): void {
    this.canceled.emit();
  }
}

import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-actions-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actions-button.component.html',
})
export class ActionsButtonComponent {
  @Input() objectId!: number;
  @Input() onDeleteClicked!: (e: Event) => void;

  constructor(protected route: ActivatedRoute) {}

  deleteClicked(event: Event): void {
    console.log(event);

    this.onDeleteClicked(event);
  }
}

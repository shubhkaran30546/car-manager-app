import { NgxToastModule } from '@angular-magic/ngx-toast';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxToastModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'client_app';
}

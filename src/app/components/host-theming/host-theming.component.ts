import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-host-theming',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule],
  host: {
    '[style.--mdc-filled-button-container-shape]': 'roudnes() + "px"',
    '[style.--mdc-outlined-button-container-shape]': 'roudnes() + "px"',

  },
  templateUrl: './host-theming.component.html',
  styleUrl: './host-theming.component.scss'
})
export class HostThemingComponent {
  roudnes = signal<number>(3)

  changeRoudnes(ev: Event) {
    this.roudnes.set(+(ev.target as HTMLInputElement).value);

  }
}

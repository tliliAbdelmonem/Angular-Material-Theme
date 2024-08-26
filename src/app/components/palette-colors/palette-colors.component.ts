import { Component, output } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-palette-colors',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './palette-colors.component.html',
  styleUrl: './palette-colors.component.scss'
})
export class PaletteColorsComponent {

  onChange = output<string>();

  colors = [
    '#515052',
    '#000103',
    '#333138',
    '#FF312E',
    '#A5FFD6',
    "#817F75",
    '#B3B5BB',
    '#C5D9E2',
    '#CDFFF9',
    '#235789',
    '#C1292E',
    '#F1D302',
    '#4F000B',
    '#720026',
    '#CE4257',
    '#FF7F51',
    '#FF9B54',
    '#49516F',
    '#496F5D',
    '#4C9F70',
    '#3454D1',
    '#CBFF4D',
    '#69747C',
    '#84DD63'
  ];

  handleClic(color: string) {
    this.onChange.emit(color);
  }

}

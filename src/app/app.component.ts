import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import {
  applyTheme,
  argbFromHex,
  themeFromSourceColor
} from '@material/material-color-utilities';
import { HostThemingComponent } from "./components/host-theming/host-theming.component";
import { PaletteColorsComponent } from "./components/palette-colors/palette-colors.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatFormFieldModule, MatInputModule, HostThemingComponent, MatCardModule, PaletteColorsComponent],
  host: {
    '[style.--mdc-filled-button-container-shape]': 'roudnes() + "px"',
    '[style.--mdc-text-button-container-shape]': 'roudnes() + "px"',
    '[style.--mdc-outlined-text-field-container-shape]': 'roudnes() + "px"',
  },
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  roudnes = signal<number>(3)

  changeRoudnes(ev: Event) {
    this.roudnes.set(+(ev.target as HTMLInputElement).value);

  }

  changeColorTheme(color: string) {
    const fallbackColor = '#005cbb';
    let argb;
    try {
      argb = argbFromHex(color);
    } catch (error) {
      argb = argbFromHex(fallbackColor);
    }
    const targetElement = document.documentElement;
    const theme = themeFromSourceColor(argb);
    console.log({ xxx: theme });
    const systemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    applyTheme(theme, {
      target: targetElement,
      dark: systemDark,
      brightnessSuffix: true,
    });
    const styles = targetElement.style;
    for (const key in styles) {
      if (Object.prototype.hasOwnProperty.call(styles, key)) {
        const propName = styles[key];
        if (propName.indexOf('--md-sys') === 0) {
          const sysPropName = '--sys' + propName.replace('--md-sys-color', '');
          targetElement.style.setProperty(
            sysPropName,
            targetElement.style.getPropertyValue(propName)
          );
        }
      }
    }
  }

  changeFlatButtonFontSize(ev: Event) {
    const size = (ev.target as HTMLInputElement).value ?? '14';

    const targetElement = document.documentElement;
    targetElement.style.setProperty('--sys-label-large-size', size + 'px');
  }

  changeHeadingFontSize(ev: Event) {
    const size = (ev.target as HTMLInputElement).value ?? '56.992';
    const targetElement = document.documentElement;
    targetElement.style.setProperty('--sys-display-large-size', size + 'px');
    targetElement.style.setProperty('--sys-display-large-line-height', '1.25');
    targetElement.style.setProperty(
      '--sys-display-large',
      '400 var(--sys-display-large-size) / var(--sys-display-large-line-height) Roboto, sans-serif'
    );
  }
}

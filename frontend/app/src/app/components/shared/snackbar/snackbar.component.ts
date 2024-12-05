import { Component, Inject } from '@angular/core';
import { InjectionToken } from '@angular/core';

export interface SnackbarData {
  message: string;
  action?: string;
  panelClass?: string[];
}

export const SNACKBAR_DATA = new InjectionToken<SnackbarData>('SnackbarData');

@Component({
  selector: 'app-snackbar',
  template: `
    <div class="snackbar-content">
      {{ data.message }}
    </div>
  `,
  styleUrls: ['./snackbar.scss']
})
export class SnackbarComponent {
  constructor(@Inject(SNACKBAR_DATA) public data: SnackbarData) {}
}

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent, SnackbarData } from './snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  showSnackbar(data: SnackbarData) {
    this.snackbar.openFromComponent(SnackbarComponent, {
      data, // Pass the data here
      duration: 3000,
      panelClass: data.panelClass || [],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  showSuccess(message: string) {
    this.showSnackbar({ message, panelClass: ['snack-bar-success'] });
  }

  showError(message: string) {
    this.showSnackbar({ message, panelClass: ['snack-bar-error'] });
  }

  showInfo(message: string) {
    this.showSnackbar({ message, panelClass: ['snack-bar-info'] });
  }

  showWarning(message: string) {
    this.showSnackbar({ message, panelClass: ['snack-bar-warning'] });
  }
}

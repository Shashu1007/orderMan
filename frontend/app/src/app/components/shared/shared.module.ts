import { NgModule } from '@angular/core';
import { SnackbarComponent } from '../shared/snackbar/snackbar.component';

@NgModule({
  declarations: [
    SnackbarComponent
   
  ],
  exports: [SnackbarComponent],
})
export class SharedModule { }

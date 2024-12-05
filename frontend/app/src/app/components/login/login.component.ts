import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  userPassword: string = '';
  isLoading: boolean = false; showError: boolean = false; 

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar,
  ) {}

  onSubmit() {console.log('Login component initialized');
console.log('Username:', this.username);
console.log('Password:', this.userPassword);
console.log('Is loading:', this.isLoading);
console.log('Show error:', this.showError);
    this.showError = true; 

    if (!this.username.trim() || !this.userPassword.trim()) {
    
      return;
    } 

    this.isLoading = true;
    const credentials = { username: this.username.trim(), userPassword: this.userPassword.trim() };

    this.authService.loginUser(credentials).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.isLoading = false;
        this.snackbar.open('Login successful!', 'Close', {
          duration: 3000,
          panelClass: 'snack-bar-success',
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.router.navigate(['/dashboard']); 
      },
      error: (error) => {
        this.isLoading = false;
        this.snackbar.open('Invalid credentials! Try again', 'Close', {
          duration: 3000,
          panelClass: ['snack-bar-error'],
          horizontalPosition: 'center',
          verticalPosition: 'top',

        });
      },
    });
  }
}

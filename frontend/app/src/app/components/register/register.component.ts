import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  passwordHash: string = '';
  confirmPassword: string = '';
  role: string = '';
  status: string = '';
  successMessage: string = '';
  errorMessage: string = '';



  

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (this.passwordHash !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const user: User = {
      username: this.username.trim(),
      passwordHash: this.passwordHash.trim(), // Assuming password will be hashed server-side
      role: this.role,
      status: this.status
    };

    this.userService.registerUser(user).subscribe({
      next: (response) => {
        this.successMessage = 'Registration successful! Redirecting to login...';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000); // Delay of 3 seconds before redirecting
      },
      error: (error) => {
        console.error(error);
        alert('Registration failed');
        this.errorMessage = 'Registration failed';
      }
    });
  }
}

import { Component, ElementRef, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})




export class NavbarComponent {
  menuOpen = false;
  dropdownOpen = false;
  animationInProgress = false;
  activeDropdown: string | null = null;

  

  
  constructor(private elementRef:  ElementRef ,private authService : AuthService, private router: Router,private snackbar: MatSnackBar) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.animationInProgress = true;
    setTimeout(() => (this.animationInProgress = false), 300);
  }

 
  toggleDropdown(menu: string, event: Event) {
    event.stopPropagation(); // Prevent this click from propagating to document
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  toggleMobileDropdown(menu: string) {
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  
  closeDropdown() {
    this.activeDropdown = null;
  }

 
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

    if (!this.elementRef.nativeElement.contains(clickedElement)) {
      this.closeDropdown();
    }
  }

 
  logout() {
    console.log('Logout triggered');

    this.authService.logout();
    

    
    this.snackbar.open('Logged out successful!y', 'Close', {
      duration: 3000,
      panelClass: 'snack-bar-success',
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.router.navigate(['/login']);
  

  }  


  openSettings(setting: string) {
    console.log(`Open settings for: ${setting}`);
  }
}

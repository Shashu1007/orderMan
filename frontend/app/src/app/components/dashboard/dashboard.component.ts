import { Component,HostListener,NgModule } from '@angular/core';

import { LoginResponse } from 'src/app/models/login-response';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  isLargeScreen: boolean = window.innerWidth > 768;
  token:string ='';
  ngOnInit(): void {
    this.token = localStorage.getItem('token') || 'No token found';
  }

 

  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth > 768;
  }
}

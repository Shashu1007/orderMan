import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs';
import { User } from '../../models/user.model';
import { LoginRequest } from '../../models/login-request';
import { LoginResponse } from '../../models/login-response'; // Ensure correct path
import { RegisteredMessage } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:9090/api/';
  private readonly tokenKey = 'token';

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<RegisteredMessage> {
    return this.http.post<RegisteredMessage>(`${this.baseUrl}register`, user).pipe(
      catchError((error) => {
        console.error('Registration failed', error);
        throw error;
      })
    );
  }

  loginUser(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}login`, credentials).pipe(
      tap((response) => {
        localStorage.setItem(this.tokenKey, response.token);
      }),
      catchError((error) => {
        console.error('Login failed', error);
        throw error;
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    console.log("User successfully logged out");
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    // Optionally, check token expiration here if needed:
    const tokenPayload = this.decodeToken(token);
    if (tokenPayload) {
      const currentTime = Math.floor(Date.now() / 1000);
      return currentTime < tokenPayload.exp;
    }
    
    return false;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      console.error('Error decoding token', e);
      return null;
    }
  }
}

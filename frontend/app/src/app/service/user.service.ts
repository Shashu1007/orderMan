import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';  // Ensure correct path
import { RegisteredMessage } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:9090/api/';

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<RegisteredMessage> {
    return this.http.post<RegisteredMessage>(`${this.baseUrl}register`, user);
  }

  loginUser(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}login`, credentials);
  }
}

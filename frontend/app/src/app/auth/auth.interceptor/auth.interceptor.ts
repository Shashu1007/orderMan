import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service/auth.service'; // Import your AuthService that provides the token

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the token from your AuthService or storage
    const token = this.authService.getToken(); // Implement this method in your AuthService

    if (token) {
      // Clone the request and set the Authorization header
      const clonedRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });

      // Pass the cloned request to the next handler
      return next.handle(clonedRequest);
    }

    // If there is no token, proceed with the original request
    return next.handle(req);
  }
}

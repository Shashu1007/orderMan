import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = `${environment.baseUrl}products`;

  constructor(private http: HttpClient) {}

  /** Fetch all products (non-paginated) */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}`).pipe(
      catchError((error) => {
        console.error('Error fetching all products:', error);
        return throwError(() => error);
      })
    );
  }

  /** Fetch paginated products */
  getProducts(
    page: number,
    size: number,
    productName?: string,
    productCategory?: string,
    sortBy: string = 'productName',
    sortDir: string = 'asc'
  ): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);

    if (productName) params = params.set('name', productName);
    if (productCategory) params = params.set('category', productCategory);

    return this.http.get<any>(`${this.apiUrl}/paginated`, { params }).pipe(
      catchError((error) => {
        console.error('Error fetching paginated products:', error);
        return throwError(() => error);
      })
    );
  }

  /** Create a new product */
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/`, product).pipe(
      catchError((error) => {
        console.error('Error creating product:', error);
        return throwError(() => error);
      })
    );
  }

  /** Update an existing product */
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product).pipe(
      catchError((error) => {
        console.error('Error updating product:', error);
        return throwError(() => error);
      })
    );
  }

  /** Delete a product by ID */
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Error deleting product:', error);
        return throwError(() => error);
      })
    );
  }
}

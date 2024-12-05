import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order } from "../models/order.model";
import { environment } from "../../../environments/environments";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  private apiUrl = `${environment.baseUrl}/orders/`; 

  constructor(private http: HttpClient) {}

  /** Fetch all orders */
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  /** Fetch a single order by ID */
  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}${id}`);
  }

  /** Create a new order */
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  /** Update an existing order by ID */
  updateOrder(id: number, order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}${id}`, order);
  }

  /** Delete an order by ID */
  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}

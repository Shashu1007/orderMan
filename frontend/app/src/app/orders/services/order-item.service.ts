import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environments';
import { OrderItem } from "../models/order-items.model";

@Injectable({
    providedIn: "root",
})
export class OrderItemService {
    private baseUrl = environment.baseUrl;

    constructor(private http : HttpClient) {}

    getOrderItems(): Observable<OrderItem[]> {
        return this.http.get<OrderItem[]>(this.baseUrl + '/ordersItems');
    }

    createOrderItem(orderItem: OrderItem): Observable<any> {
        return this.http.post<OrderItem>(this.baseUrl + '/ordersItems', orderItem);
    }

    deleteOrder(id: number): Observable<any> {
        return this.http.delete(this.baseUrl + '/orderItems/' + id);
    }

    updateOrder(id: number, orderItem: OrderItem): Observable<any> {
        return this.http.put<OrderItem>(this.baseUrl + '/orderItems/' + id, orderItem);
    }

    getOrder(id: number): Observable<OrderItem> {
        return this.http.get<OrderItem>(this.baseUrl + '/orderItems/' + id);
    }   

    getAllOrderItems(): Observable<OrderItem[]> {
        return this.http.get<OrderItem[]>(this.baseUrl + '/orderItems');
    }   

}
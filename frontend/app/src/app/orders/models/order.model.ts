import { OrderItem } from '../models/order-items.model';


export class Order {
    orderId!: number;
    orderNumber?: string;

    
    customerId!: number;
    customerName!: string;
  
    orderTakenDate!: Date;
    dueDate!: Date;
    orderStatus!: 'NEW' | 'PENDING' |'PARTIALLY_COMPLETED' | 'COMPLETED' | 'CANCELLED';
    
    orderTakenByUserId?: number;
    orderTakenByUserName?: string;
  
    orderItems!: OrderItem[]; 
  }
  
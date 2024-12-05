export enum Uom {
    KG = 'KG',
    MTR = 'MTR',
    CM = 'CM',
    IN = 'IN',
    GMS = 'GMS',
    NOS = 'NOS',
    SET = 'SET',
    PACKETS = 'PACKETS',
    LTR = 'LTR'
}

export interface Product {
    productId: number;
    productName: string;
    productCategory: string;
    stockQuantity: number;
    uom: Uom;
    pricePerUnit: number;
    specification: string;
    isDeleted: boolean;
    createdBy: number;
    updatedBy: number;
}

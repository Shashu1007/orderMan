export enum OrderStatus {
    NEW = 'NEW',
    PARTIALLY_COMPLETED = 'PARTIALLY_COMPLETED',
    COMPLETED = 'COMPLETED',
    PENDING = 'PENDING',
    CANCELLED = 'CANCELLED',
    PROCESSING = 'PROCESSING',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED'
}

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER',
    BRANCH_ADMIN = 'BRANCH_ADMIN',
    STAFF = 'STAFF'
}

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

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    DELETED = 'DELETED'
}

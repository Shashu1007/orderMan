export interface RegisterRequest {
    username: string;
    passwordHash: string;
    confirmPassword: string;
    role: string;
    status: string;
}
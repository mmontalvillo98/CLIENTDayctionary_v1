export interface User {
    id?: string,
    mail?: string, 
    password?: string,
    notifications?: boolean,
    version?: number,
    roles?: string[]
}

export interface VerificationCode {
    code: string
}
export class ValidationError extends Error {}
export class ExistenceError extends Error {}
export class DuplicityError extends Error {}
export class CredentialError extends Error {}
export class OwnerShipError extends Error {}
export class SystemError extends Error {}


export const errorMap = {
    ValidationError,
    ExistenceError,
    DuplicityError,
    CredentialError,
    OwnerShipError,
    SystemError
}

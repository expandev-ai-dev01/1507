/**
 * @summary Error codes
 */
export const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  CONFLICT: 'CONFLICT',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const;

/**
 * @summary Error messages
 */
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'requiredField',
  INVALID_FORMAT: 'invalidFormat',
  NOT_FOUND: 'notFound',
  ALREADY_EXISTS: 'alreadyExists',
  UNAUTHORIZED_ACCESS: 'unauthorizedAccess',
  FORBIDDEN_ACTION: 'forbiddenAction',
  INTERNAL_ERROR: 'internalError',
} as const;

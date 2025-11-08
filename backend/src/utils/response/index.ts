/**
 * @summary Success response interface
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

/**
 * @summary List response interface
 */
export interface ListResponse<T> {
  success: true;
  data: T[];
  metadata: {
    page: number;
    pageSize: number;
    total: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

/**
 * @summary Creates a success response
 * @function successResponse
 * @module response
 *
 * @param {T} data Response data
 * @param {object} metadata Optional metadata
 *
 * @returns {SuccessResponse<T>} Formatted success response
 */
export function successResponse<T>(data: T, metadata?: any): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * @summary Creates a list response
 * @function listResponse
 * @module response
 *
 * @param {T[]} data Array of data items
 * @param {number} page Current page number
 * @param {number} pageSize Items per page
 * @param {number} total Total items count
 *
 * @returns {ListResponse<T>} Formatted list response
 */
export function listResponse<T>(
  data: T[],
  page: number,
  pageSize: number,
  total: number
): ListResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      page,
      pageSize,
      total,
      hasNext: page * pageSize < total,
      hasPrevious: page > 1,
    },
  };
}

/**
 * @summary Creates an error response
 * @function errorResponse
 * @module response
 *
 * @param {string} message Error message
 * @param {string} code Error code
 * @param {any} details Optional error details
 *
 * @returns {object} Formatted error response
 */
export function errorResponse(message: string, code = 'ERROR', details?: any): object {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  };
}

/**
 * @summary Common type definitions
 * @description Shared types used across the application
 */

/**
 * @interface PaginationParams
 * @description Pagination parameters for list operations
 */
export interface PaginationParams {
  page: number;
  pageSize: number;
}

/**
 * @interface SortParams
 * @description Sorting parameters for list operations
 */
export interface SortParams {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

/**
 * @interface FilterParams
 * @description Base filter parameters
 */
export interface FilterParams {
  search?: string;
  deleted?: boolean;
}

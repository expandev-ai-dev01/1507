/**
 * @summary Validates required parameters
 * @function validateRequired
 * @module validation
 *
 * @param {any} value Parameter value to validate
 * @param {string} paramName Parameter name for error message
 *
 * @throws {Error} When parameter is null or undefined
 */
export function validateRequired(value: any, paramName: string): void {
  if (value === null || value === undefined || value === '') {
    throw new Error(`${paramName}Required`);
  }
}

/**
 * @summary Validates positive number
 * @function validatePositive
 * @module validation
 *
 * @param {number} value Number to validate
 * @param {string} paramName Parameter name for error message
 *
 * @throws {Error} When value is not positive
 */
export function validatePositive(value: number, paramName: string): void {
  if (value <= 0) {
    throw new Error(`${paramName}MustBePositive`);
  }
}

/**
 * @summary Validates non-negative number
 * @function validateNonNegative
 * @module validation
 *
 * @param {number} value Number to validate
 * @param {string} paramName Parameter name for error message
 *
 * @throws {Error} When value is negative
 */
export function validateNonNegative(value: number, paramName: string): void {
  if (value < 0) {
    throw new Error(`${paramName}MustBeNonNegative`);
  }
}

/**
 * @summary Validates string length
 * @function validateLength
 * @module validation
 *
 * @param {string} value String to validate
 * @param {number} maxLength Maximum allowed length
 * @param {string} paramName Parameter name for error message
 *
 * @throws {Error} When string exceeds maximum length
 */
export function validateLength(value: string, maxLength: number, paramName: string): void {
  if (value.length > maxLength) {
    throw new Error(`${paramName}ExceedsMaxLength`);
  }
}

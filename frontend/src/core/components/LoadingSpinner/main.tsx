import { getLoadingSpinnerClassName } from './variants';
import type { LoadingSpinnerProps } from './types';

/**
 * @component LoadingSpinner
 * @summary Loading spinner component for async operations
 * @domain core
 * @type ui-component
 * @category feedback
 *
 * @props
 * @param {LoadingSpinnerProps} props - Component properties
 * @param {string} props.size - Spinner size (small, medium, large)
 * @param {string} props.className - Additional CSS classes
 *
 * @examples
 * ```tsx
 * <LoadingSpinner size="medium" />
 * <LoadingSpinner size="large" className="my-4" />
 * ```
 */
export const LoadingSpinner = ({ size = 'medium', className }: LoadingSpinnerProps) => {
  return (
    <div className={getLoadingSpinnerClassName({ size, className })}>
      <div className="animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
    </div>
  );
};

import { useState, useCallback } from "react";

// type facing async operations with loading state management
// This hook can be used to handle asynchronous operations with loading states, errors, and success callbacks
// It provides a way to execute async functions while managing loading states and errors, ensuring a smooth user experience.
interface UseAsyncLoadingOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  minLoadingTime?: number;
}

export const useAsyncLoading = (options: UseAsyncLoadingOptions = {}) => {
  const { onSuccess, onError, minLoadingTime = 500 } = options;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async <T>(asyncFunction: () => Promise<T>): Promise<T | null> => {
      setIsLoading(true);
      setError(null);

      const startTime = Date.now();

      try {
        const result = await asyncFunction();

        // Ensure minimum loading time for better UX
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

        if (remainingTime > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingTime));
        }

        onSuccess?.();
        return result;
      } catch (err) {
        const error = err as Error;
        setError(error);
        onError?.(error);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [onSuccess, onError, minLoadingTime]
  );

  const reset = useCallback(() => {
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    execute,
    reset,
  };
};

export default useAsyncLoading;

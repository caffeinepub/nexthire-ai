import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

// This file contains React Query hooks for backend operations
// Currently, the backend only has saveEmail which is handled as a mutation in EmailSignupSection
// Add additional query hooks here as needed for future backend operations

export function useExample() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['example'],
    queryFn: async () => {
      if (!actor) return null;
      // Add query logic here when needed
      return null;
    },
    enabled: !!actor && !isFetching,
  });
}

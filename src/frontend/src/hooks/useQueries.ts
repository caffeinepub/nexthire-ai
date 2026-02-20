import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Lead, LeadError } from '../backend';

// This file contains React Query hooks for backend operations

export function useAllLeads() {
  const { actor, isFetching } = useActor();

  return useQuery<Lead[]>({
    queryKey: ['leads'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllLeads();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateLead() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation<LeadError | null, Error, {
    fullName: string;
    email: string;
    country: string;
    targetJobRole: string;
  }>({
    mutationFn: async ({ fullName, email, country, targetJobRole }) => {
      if (!actor) throw new Error('Backend not available');
      return actor.createLead(fullName, email, country, targetJobRole);
    },
    onSuccess: (result) => {
      // Only invalidate cache if the lead was successfully created (result is null)
      if (result === null) {
        queryClient.invalidateQueries({ queryKey: ['leads'] });
      }
    },
  });
}

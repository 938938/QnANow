import { createAsk } from '@/actions/ask-actions';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateAsk = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ ask, answer }: { ask: string; answer: string }) =>
      createAsk({ ask, answer }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['aiAnswers'] });
    },
  });
};

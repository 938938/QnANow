import { getAsks } from '@/actions/ask-actions';
import { useQuery } from '@tanstack/react-query';

export const useGetAsks = () => {
  return useQuery({
    queryKey: ['aiAnswers'],
    queryFn: async () => {
      const data = await getAsks();
      return data;
    },
  });
};

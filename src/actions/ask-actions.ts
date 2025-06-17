'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';
import { Database } from '../../types_db';

export type QuestionRow = Database['public']['Tables']['question']['Row'];
export type QuestionRowInsert =
  Database['public']['Tables']['question']['Insert'];
export type QuestionRowUpdate =
  Database['public']['Tables']['question']['Update'];

const errorHandler = (error: any) => {
  console.error(error);
  throw new Error(error.message);
};

export const createAsk = async (question: QuestionRowInsert) => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from('question').insert({
    ...question,
    created_at: new Date().toISOString(),
  });

  if (error) {
    errorHandler(error);
  }

  return data;
};

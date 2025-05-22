'use client';
import { useAppSelector } from '@/utils/hooks/hooks';

const Answer = () => {
  const { ask, answer, pic, loading, error } = useAppSelector(
    (state) => state.ox
  );

  if (loading) {
    return <p>답변을 가져오는 중입니다.</p>;
  }
  if (error) {
    return <p>답변을 가져오는 것에 실패했습니다.</p>;
  }

  return (
    <div>
      <p>{ask}</p>
      <p>{answer}</p>
      <p>{pic}</p>
    </div>
  );
};

export default Answer;

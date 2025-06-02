'use client';
import { useAppSelector } from '@/utils/hooks/hooks';

const AIAnswer = () => {
  const { ask, answer, loading, error } = useAppSelector((state) => state.ai);

  if (loading) {
    return <p>답변을 가져오는 중입니다.</p>;
  }
  if (error) {
    return <p>답변을 가져오는 것에 실패했습니다.</p>;
  }

  return (
    <div className='flex flex-col my-2 w-full items-center gap-2'>
      {ask && <p>질문 : {ask}?</p>}
      {answer && <p>답변 : {answer}</p>}
    </div>
  );
};

export default AIAnswer;

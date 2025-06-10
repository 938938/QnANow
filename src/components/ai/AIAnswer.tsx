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
      {ask && (
        <div className='flex w-full justify-start'>
          <div className='bg-defaultLightblue p-4 shadow max-w-md'>
            <p>{ask}?</p>
          </div>
        </div>
      )}
      {answer && (
        <div className='flex w-full justify-end'>
          <div className='bg-defaultCreamGray p-4 shadow max-w-md'>
            <p>{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAnswer;

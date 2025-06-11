'use client';
import { useAppSelector } from '@/utils/hooks/hooks';
import Spinner from '../common/Spinner';

const AIAnswer = () => {
  const { ask, answer, list, loading, error } = useAppSelector(
    (state) => state.ai
  );
  if (error) {
    return <p>답변을 가져오는 것에 실패했습니다.</p>;
  }

  return (
    <>
      {loading && (
        <div className='flex justify-center items-center'>
          <Spinner />
        </div>
      )}
      {list.length > 0 &&
        list.map((ele) => (
          <div className='flex flex-col my-2 w-full items-center gap-2'>
            {ele.ask && (
              <div className='flex w-full justify-start'>
                <div className='bg-defaultLightblue p-4 shadow max-w-md'>
                  <p>{ele.ask}</p>
                </div>
              </div>
            )}
            {ele.answer && (
              <div className='flex w-full justify-end'>
                <div className='bg-defaultCreamGray p-4 shadow max-w-md'>
                  <p>{ele.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
    </>
  );
};

export default AIAnswer;

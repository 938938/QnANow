'use client';

import Spinner from '../common/Spinner';
import AIAnswer from './AIAnswer';
import { useGetAsks } from '@/utils/hooks/useGetAsks';

const AIAnswerList = () => {
  const { data, isLoading, error, isFetching } = useGetAsks();

  if (error) {
    return <p>답변을 가져오는 것에 실패했습니다.</p>;
  }

  return (
    <div
      className='mt-10 h-[48dvh] overflow-y-scroll [&::-webkit-scrollbar]:hidden'
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {(isLoading || isFetching) && (
        <div className='flex justify-center items-center'>
          <Spinner />
        </div>
      )}
      {data &&
        data.length > 0 &&
        data.map((ele) => (
          <AIAnswer
            key={ele.created_at}
            ask={ele.ask}
            answer={ele.answer}
            date={new Date(ele.created_at).toLocaleString()}
          />
        ))}
    </div>
  );
};

export default AIAnswerList;

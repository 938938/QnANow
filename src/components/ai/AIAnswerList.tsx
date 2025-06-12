'use client';
import { useAppSelector } from '@/utils/hooks/hooks';
import Spinner from '../common/Spinner';
import AIAnswer from './AIAnswer';

const AIAnswerList = () => {
  const { list, loading, error } = useAppSelector((state) => state.ai);
  if (error) {
    return <p>답변을 가져오는 것에 실패했습니다.</p>;
  }

  return (
    <div
      className='mt-10 h-[50dvh] overflow-y-scroll [&::-webkit-scrollbar]:hidden'
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {loading && (
        <div className='flex justify-center items-center'>
          <Spinner />
        </div>
      )}
      {list.length > 0 &&
        list.map((ele) => (
          <AIAnswer ask={ele.ask} answer={ele.answer} date={ele.date} />
        ))}
    </div>
  );
};

export default AIAnswerList;

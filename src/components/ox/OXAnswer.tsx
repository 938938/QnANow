'use client';
import { useAppSelector } from '@/utils/hooks/hooks';
import Image from 'next/image';

const OXAnswer = () => {
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
    <div className='flex flex-col my-2 w-full items-center gap-2 h-96'>
      {ask && <p>질문 : {ask}?</p>}
      {answer && <p>답변 : {answer}</p>}
      {pic && (
        <div className='p-2 border'>
          <Image
            src={pic}
            alt={`${answer}을 나타내는 이미지`}
            width={300}
            height={300}
          />
        </div>
      )}
    </div>
  );
};

export default OXAnswer;

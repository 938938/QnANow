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
    <div className='flex flex-col w-full items-center gap-2 min-h-[50dvh] border-2 border-defaultMidnightexpress rotate-2 mt-10'>
      <div className='flex flex-col w-full items-center justify-center gap-2 min-h-[50dvh] border-2 border-defaultMidnightexpress -rotate-2 bg-white p-2'>
        <div>
          {ask && (
            <div className='flex justify-start'>
              <p className='text-nowrap'>Q :&nbsp;</p>
              <p>{ask}</p>
            </div>
          )}
          {answer && (
            <div className='flex justify-start'>
              <p className='text-nowrap'>A :&nbsp;</p>
              <p>{answer}</p>
            </div>
          )}
        </div>
        {pic && (
          <div className='p-2 border m-2 max-h-[40dvh]'>
            <Image
              src={pic}
              alt={`${answer}을 나타내는 이미지`}
              width={300}
              height={300}
              objectFit='contain'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OXAnswer;

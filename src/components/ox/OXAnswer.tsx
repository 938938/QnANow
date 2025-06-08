'use client';
import { useAppSelector } from '@/utils/hooks/hooks';
import Image from 'next/image';
import Spinner from '../common/Spinner';

const OXAnswer = () => {
  const { ask, answer, pic, bgSet, loading, error } = useAppSelector(
    (state) => state.ox
  );

  return (
    <div
      className={`flex flex-col w-full items-center gap-2 min-h-[50dvh] border-2 border-defaultMidnightexpress rotate-2 mt-10 ${
        bgSet === 'yes'
          ? 'bg-defaultDarkturquoise'
          : bgSet === 'no'
          ? 'bg-defaultRadicalred'
          : 'bg-white'
      }`}
    >
      <div className='flex flex-col w-full items-center justify-center gap-2 min-h-[50dvh] border-2 border-defaultMidnightexpress -rotate-2 bg-white p-2'>
        <div>
          {ask && (
            <div className='flex justify-start'>
              <p className='text-nowrap'>Q :&nbsp;</p>
              <p>{ask}</p>
            </div>
          )}
          {loading && <p>답변을 가져오는 중입니다.</p>}
          {error && <p>답변을 가져오는 것에 실패했습니다.</p>}
          {!loading && answer && (
            <div className='flex justify-start'>
              <p className='text-nowrap'>A :&nbsp;</p>
              <p>{answer}</p>
            </div>
          )}
        </div>
        <div className='p-2 border m-2 max-h-[40dvh]'>
          {loading && <Spinner />}
          {!loading && pic && (
            <Image
              src={pic}
              alt={`${answer}을 나타내는 이미지`}
              width={300}
              height={300}
              objectFit='contain'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OXAnswer;

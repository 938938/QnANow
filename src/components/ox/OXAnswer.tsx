'use client';
import { useAppSelector } from '@/utils/hooks/useRedux';
import Image from 'next/image';
import Spinner from '../common/Spinner';

const OXAnswer = () => {
  const { list, loading, error } = useAppSelector((state) => state.ox);

  return (
    <div
      className={`flex flex-col w-full items-center gap-2 min-h-[50dvh] border-2 border-defaultMidnightexpress rotate-2 mt-6 ${
        list[0]
          ? list[0].bgSet === 'yes'
            ? 'bg-defaultDarkturquoise'
            : 'bg-defaultRadicalred'
          : 'bg-white'
      }`}
    >
      <div className='flex flex-col w-full items-center justify-center gap-2 min-h-[50dvh] border-2 border-defaultMidnightexpress -rotate-2 bg-white p-2'>
        <div>
          {list[0] && (
            <div className='flex justify-start'>
              <p className='text-nowrap'>Q :&nbsp;</p>
              <p>{list[0].ask || ''}</p>
            </div>
          )}
          {loading && <p>답변을 가져오는 중입니다.</p>}
          {error && <p>답변을 가져오는 것에 실패했습니다.</p>}
          {!loading && list[0] && (
            <div className='flex justify-start'>
              <p className='text-nowrap'>A :&nbsp;</p>
              <p>{list[0].answer || ''}</p>
            </div>
          )}
        </div>
        <div className='p-2 border m-2 max-h-[40dvh]'>
          {loading && <Spinner />}
          {!loading && list[0] && (
            <Image
              src={list[0].pic}
              alt={`${list[0].answer}을 나타내는 이미지`}
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

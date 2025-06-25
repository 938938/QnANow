'use client';

import Title from '@/components/common/Title';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex flex-col mx-auto max-w-screen-sm my-2'>
      <Title
        title='길을 잃으셨나요?'
        sub='원하시는 곳으로 이동시켜 드릴게요!'
      />
      <div className='flex flex-col items-center justify-center m-4 gap-2'>
        <p>예 / 아니오 로 답변을 받고 싶으시다면!</p>
        <Link href={'/'} className='border-2 bg-defaultCreamGray p-2'>
          Ask OX
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center m-4 gap-2'>
        <p>AI에게 간단하게 질문하고 싶으시다면!</p>
        <Link href={'/askai'} className='border-2 bg-defaultLightblue p-2'>
          Ask AI
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

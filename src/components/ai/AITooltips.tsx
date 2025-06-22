import React from 'react';

const AITooltips = () => {
  return (
    <>
      <div className='absolute group top-5 right-5 w-full flex justify-end'>
        <button className='border-2 border-defaultRadicalred text-defaultRadicalred w-8 h-8 rounded-full font-bold'>
          !
        </button>
        <div className='absolute top-10 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 z-50 pointer-events-none'>
          <p className='bg-defaultMidnightexpress text-defaultWisper text-sm border-2 border-defaultRadicalred rounded p-2'>
            AI 질문과 답변은 다른 사용자에게도 공개됩니다.
            <br />
            부적절한 질문과 답변은 안내 없이 삭제될 수 있습니다.
            <br />
            토큰이 모두 소진되어 오류가 발생할 땐 다음날 이용해주세요.
          </p>
        </div>
      </div>
    </>
  );
};

export default AITooltips;

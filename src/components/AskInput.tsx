import React from 'react';

const AskInput = () => {
  return (
    <div className='flex flex-col mx-auto max-w-screen-sm gap-2 my-2'>
      <input className='border' />
      <button className='bg-slate-300'>질문하기</button>
    </div>
  );
};

export default AskInput;

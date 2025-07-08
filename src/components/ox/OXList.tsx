'use client';

import { useState } from 'react';

const OXList = () => {
  
  const [showList, setShowList] = useState<boolean>(false);
  return (
    <div className='relative flex top-2'>
      <button
        onClick={() => setShowList(!showList)}
        className='border p-2 rounded'
      >
        &#62; 했던 질문 목록
      </button>
      {showList && (
        <ul className='absolute z-50 left-36 bg-white'>
          <li className='p-2 border '>질문 / 답</li>
          <li className='p-2 border '>
            아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주매우긴질문
            / 답
          </li>
        </ul>
      )}
    </div>
  );
};

export default OXList;

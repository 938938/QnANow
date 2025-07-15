'use client';

import useGetList from '@/utils/hooks/useGetList';
import { useAppSelector } from '@/utils/hooks/useRedux';
import { useState } from 'react';

const OXList = () => {
  useGetList();
  const [showList, setShowList] = useState<boolean>(false);
  const { list } = useAppSelector((state) => state.ox);
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
          {list.map((ele, idx) => (
            <li className='p-2 border' key={idx}>
              {ele.ask} / {ele.answer}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OXList;

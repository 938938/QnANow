'use client';

import useGetList from '@/utils/hooks/useGetList';
import { useAppSelector } from '@/utils/hooks/useRedux';

const OXList = () => {
  useGetList();
  const { list } = useAppSelector((state) => state.ox);
  return (
    <div className='relative flex top-2 group'>
      <button className='border p-2 rounded'>&#62; 했던 질문 목록</button>
      <ul className='absolute z-50 left-36 bg-white opacity-0 group-hover:opacity-100'>
        {list.map((ele, idx) => (
          <li className='p-2 border' key={idx}>
            {ele.ask} / {ele.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OXList;

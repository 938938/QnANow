'use client';

import useGetList from '@/utils/hooks/useGetList';
import { useAppSelector } from '@/utils/hooks/useRedux';
import Accordion from '../common/Accordion';

const OXList = () => {
  useGetList();
  const { list } = useAppSelector((state) => state.ox);
  return (
    <div className='relative flex top-2 group w-full h-12'>
      {list.length > 0 && (
        <>
          <button className='border p-2 rounded'>&#62; 했던 질문 목록</button>
          <ul className='absolute z-50 left-36 bg-white opacity-0 group-hover:opacity-100 w-1/2'>
            {list.map((ele, idx) => (
              <Accordion
                key={idx}
                ask={ele.ask}
                answer={ele.answer}
                bgSet={ele.bgSet}
                pic={ele.pic}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default OXList;

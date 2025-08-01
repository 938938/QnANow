'use client';

import useGetList from '@/utils/hooks/useGetList';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/useRedux';
import { setAsk } from '@/utils/redux/oxSlice';
import { useState } from 'react';

const OXList = () => {
  useGetList();
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.ox);
  const [open, setOpen] = useState<boolean>(false);
  const onClickLiHandler = (idx: number) => {
    const { ask, answer, pic, bgSet } = list[idx];
    const selected = {
      ask,
      answer,
      pic,
      bgSet,
    };
    dispatch(setAsk(selected));
    setOpen(false);
  };
  return (
    <div className='relative flex top-2 h-12'>
      {list.length > 0 && (
        <>
          <button
            className='border p-2 rounded'
            onClick={() => {
              setOpen(!open);
            }}
          >
            &#62; 했던 질문 목록
          </button>
          {open && (
            <ul className='absolute z-50 left-36 bg-white'>
              {list.map((ele, idx) => (
                <li
                  className={`p-2 border border-x-2 cursor-pointer ${
                    ele.bgSet === 'yes'
                      ? 'border-x-defaultDarkturquoise'
                      : 'border-x-defaultRadicalred'
                  }`}
                  key={idx}
                  onClick={() => onClickLiHandler(idx)}
                >
                  {ele.ask}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default OXList;

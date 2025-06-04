'use client';

import { useState } from 'react';

const InputComponents = ({
  value,
  setValue,
  onClickHandler,
  text,
  list,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onClickHandler: () => void;
  text: string;
  list: string[];
}) => {
  const [showList, setShowList] = useState<boolean>(false);
  const filtered = list.filter((item) =>
    item.toLowerCase().includes(value.toLowerCase())
  );
  return (
    <>
      <form
        className='flex'
        onSubmit={(e) => {
          e.preventDefault();
          onClickHandler();
        }}
      >
        <input
          type='text'
          className='bg-defaultWhite border border-defaultMint text-gray-900 text-sm focus:ring-2 focus:ring-inset focus:ring-defaultMint focus:outline-none block p-2.5 flex-1'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setShowList(true)}
          onBlur={() => setShowList(false)}
        />
        <button
          onClick={onClickHandler}
          className='bg-defaultWhite px-4 border border-defaultMint active:shadow-[inset_4px_4px_gray]'
        >
          {text}
        </button>
      </form>
      {showList && filtered.length > 0 && (
        <ul>
          {filtered.map((ele, idx) => (
            <li
              key={idx}
              className='bg-defaultBrown text-gray-800 p-2.5 border-white border-b-2'
            >
              {ele}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default InputComponents;

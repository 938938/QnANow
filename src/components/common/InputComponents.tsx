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
  const [selected, setSelected] = useState<number>(-1);
  const filtered = list.filter((item) =>
    item.toLowerCase().includes(value.toLowerCase())
  );
  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' && selected < filtered.length - 1) {
      setSelected(selected + 1);
    } else if (e.key === 'ArrowUp' && selected > 0) {
      setSelected(selected - 1);
    }
    if (e.key === 'Enter' && selected >= 0) {
      setValue(filtered[selected]);
      onClickHandler();
    }
  };
  return (
    <div onKeyUp={onKeyUpHandler} className='relative'>
      <form
        className='flex'
        onSubmit={(e) => {
          e.preventDefault();
          onClickHandler();
        }}
      >
        <input
          type='text'
          className='bg-white border-defaultMidnightexpress border-2 text-gray-900 text-sm focus:ring-inset focus:ring-defaultMidnightexpress focus:outline-none block p-2.5 flex-1'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setShowList(true)}
          onBlur={() => setShowList(false)}
        />
        <button
          onClick={onClickHandler}
          className='bg-white px-4 border-defaultMidnightexpress border-2 active:shadow-[inset_4px_4px_gray] border-l-0'
        >
          {text}
        </button>
      </form>
      {showList && filtered.length > 0 && (
        <ul className='border-2 border-defaultMidnightexpress border-t-0 absolute w-full'>
          {filtered.map((ele, idx) => (
            <li
              key={idx}
              className={`text-gray-800 p-2.5 border-defaultWisper border-b-2 ${
                selected === Number(idx)
                  ? 'bg-defaultLightblue'
                  : 'bg-defaultCreamGray'
              }`}
              onMouseDown={() => {
                setValue(ele);
              }}
            >
              {ele}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputComponents;

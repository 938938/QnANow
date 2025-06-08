'use client';

import { useRef, useState } from 'react';

const InputComponents = ({
  value,
  setValue,
  selected,
  setSelected,
  onClickHandler,
  text,
  list,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  onClickHandler: () => void;
  text: string;
  list: string[];
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showList, setShowList] = useState<boolean>(false);
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
    <div onKeyUp={onKeyUpHandler} className='relative z-10'>
      <form
        className='flex'
        onSubmit={(e) => {
          e.preventDefault();
          onClickHandler();
          if (selected === -1) {
            inputRef.current!.blur();
          }
        }}
      >
        <input
          ref={inputRef}
          type='text'
          className='bg-white border-defaultMidnightexpress border-2 text-gray-900 text-sm focus:ring-inset focus:ring-defaultMidnightexpress focus:outline-none block p-2.5 flex-1'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setShowList(true)}
          onBlur={() => setShowList(false)}
          placeholder='이곳에 질문을 입력해주세요.'
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

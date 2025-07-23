'use client';

import { useState } from 'react';

const Accordion = ({
  ask,
  answer,
  bgSet,
}: {
  ask: string;
  answer: string;
  bgSet: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`p-2 border border-x-2 cursor-pointer w-full ${
        bgSet === 'yes'
          ? 'border-x-defaultDarkturquoise'
          : 'border-x-defaultRadicalred'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex justify-between items-center text-left font-medium transition'
      >
        <span>{ask}</span>
        {isOpen ? (
          <svg
            data-accordion-icon
            className='w-3 h-3 shrink-0'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1'
              d='M9 5 5 1 1 5'
            />
          </svg>
        ) : (
          <svg
            data-accordion-icon
            className='w-3 h-3 rotate-180 shrink-0'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1'
              d='M9 5 5 1 1 5'
            />
          </svg>
        )}
      </button>
      <div
        className={`px-4 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default Accordion;

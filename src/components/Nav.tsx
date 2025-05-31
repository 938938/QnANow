'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className='flex absolute -top-11 gap-1'>
      <Link
        href={'/'}
        className={`bg-defaultWhite border-2 border-solid border-defaultGreen p-2 ${
          pathname === '/' && 'border-b-0'
        }`}
      >
        <button>OX로 답변받기</button>
      </Link>
      <Link
        href={'/ai'}
        className={`bg-defaultWhite border-2 border-solid border-defaultGreen p-2 ${
          pathname === '/ai' && 'border-b-0'
        }`}
      >
        <button>AI에게 물어보기</button>
      </Link>
    </div>
  );
};

export default Nav;

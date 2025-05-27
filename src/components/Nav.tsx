'use client';

import Link from 'next/link';

const Nav = () => {
  return (
    <div className='flex gap-2'>
      <Link href={'/'}>
        <button>OX로 답변받기</button>
      </Link>
      <Link href={'/ai'}>
        <button>AI에게 물어보기</button>
      </Link>
    </div>
  );
};

export default Nav;

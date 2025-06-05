'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'OX로 답변받기' },
  { href: '/ai', label: 'AI에게 물어보기' },
];

const Nav = () => {
  const pathname = usePathname();
  const linkStyleHandler = (href: string) => {
    const base =
      'bg-defaultWhite border-2 border-solid border-defaultGreen p-2';
    const active = 'border-b-0 bg-white';
    return `${base} ${pathname === href ? active : ''}`;
  };

  return (
    <div className='flex absolute -top-11 gap-1'>
      {navItems.map(({ href, label }) => (
        <Link key={href} href={href} className={linkStyleHandler(href)}>
          {label}
        </Link>
      ))}
    </div>
  );
};

export default Nav;

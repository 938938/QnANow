'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Ask OX' },
  { href: '/ai', label: 'Ask AI' },
];

const Nav = () => {
  const pathname = usePathname();
  const linkStyleHandler = (href: string) => {
    const base = 'border-2 border-solid border-defaultMidnightexpress p-2';
    const active = 'border-b-0 bg-white';
    const passive = 'bg-defaultCreamGray';
    return `${base} ${pathname === href ? active : passive}`;
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

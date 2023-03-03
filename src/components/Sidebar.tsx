import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Navlink } from './Navlink';

const links = ['overview', 'collections', 'saved', 'settings', 'about'];

export const Sidebar = () => {
  return (
    <header className='flex-start flex h-full shrink-0 flex-col border-r border-border bg-component'>
      <Link
        href='/'
        className='w-full py-8 pl-8 pr-20'>
        <Image
          src='/logo.svg'
          alt='Company logo'
          width={142}
          height={30}
        />
      </Link>
      <nav className='overflow-y-auto py-4'>
        <ul className='flex w-full flex-col gap-2'>
          {links.map(link => (
            <li key={link}>
              <Navlink
                href={'/' + link}
                icon={'/' + link + '.svg'}
                text={link}
              />
            </li>
          ))}
        </ul>
      </nav>
      <div className='mt-auto border-t border-border p-4 text-white'>
        <Link
          href='/login'
          className='block w-full rounded-[0.25rem] bg-border py-3 px-4 text-center'>
          Log In
        </Link>
      </div>
    </header>
  );
};

'use client';

import { useSupabase } from './SupabaseProvider';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Navlink } from './Navlink';

const links = ['overview', 'collections', 'saved', 'settings', 'about'];

export const Sidebar = () => {
  const { supabase, session } = useSupabase()

  const handleGitHubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  console.log(session)

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
        {!session ? <button
          onClick={handleGitHubLogin}
          className='block w-full rounded-[0.25rem] bg-border py-3 px-4 text-center'>
          Log In
        </button> : <><div className='flex items-center'><Image className="mr-2 rounded-full" src={session.user.user_metadata.avatar_url} alt="" width={32} height={32}/><div className='flex flex-col'>
          <p>{session.user.user_metadata.preferred_username}</p><span>{session.user.user_metadata.email}</span></div></div><button
          onClick={handleLogout}
          className='block w-full rounded-[0.25rem] bg-border py-3 px-4 text-center'>
          Log Out
        </button></>}
      </div>
    </header>
  );
};

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

type TLink = {
  href: string;
  icon: string;
  text: string;
};

export const Navlink = ({ href, icon, text }: TLink) => {
  return (
    <Link
      className='flex w-full items-center bg-component px-8 py-4 font-bold capitalize text-white hover:bg-border focus:bg-border'
      href={href}>
      <picture className='relative mr-4 h-5 w-5'>
        <Image
          src={icon}
          alt=''
          fill
          priority
        />
      </picture>
      {text}
    </Link>
  );
};

import { Card } from '@/components/Card';
import { NewSnippet } from '@/components/NewSnippet';

const code =
  "<header className=' flex-start flex h-full flex-col border-r border-border bg-component'>\n<Link\n  href='/'\n  className='w-full py-8 pl-8 pr-20'>\n  <Image\n    src='/logo.svg'\n    alt='Company logo'\n    width={142}\n    height={30}\n  />\n</Link>\n<nav className='overflow-y-auto py-4'>\n  <ul className='flex w-full flex-col gap-2'>\n    {links.map(link => (\n      <li key={link}>\n        <Navlink\n          href={'/' + link}\n          icon={'/' + link + '.svg'}\n          text={link}\n        />\n      </li>\n    ))}\n  </ul>\n</nav>\n<div className='mt-auto border-t border-border px-8 py-4 text-white'>\n  Placeholder TODO: login\n</div>\n</header>";

export default async function Home() {
  return (
    <>
      <h1 className='mb-8 text-[2rem] font-bold text-white'>Overview</h1>
      <section className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'>
        <Card
          language='javascript'
          name='Lorem ipsum docet'
          tags={["navigation", "javascript", "react", "typescript", "section"]}
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis dolorum error soluta quas corrupti facere.'
          code={code}
        />
        <Card
          language='javascript'
          name='Lorem ipsum docet'
          tags={["nav", "ts"]}
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis dolorum error soluta quas corrupti facere.'
          code={code}
        />
        <Card
          language='javascript'
          name='Lorem ipsum docet'
          tags={["nav", "ts"]}
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis dolorum error soluta quas corrupti facere.'
          code={code}
        />
        <Card
          language='javascript'
          name='Lorem ipsum docet'
          tags={["navigation", "javascript", "react", "typescript", "section"]}
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis dolorum error soluta quas corrupti facere.'
          code={code}
        />
        <Card
          language='javascript'
          name='Lorem ipsum docet'
          tags={["nav", "ts"]}
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis dolorum error soluta quas corrupti facere.'
          code={code}
        />
        <NewSnippet />
      </section>
    </>
  );
}

'use client';

import { MouseEvent, useState } from 'react';
import colors from '../colors.json';

type TSnippet = {
  language: string;
  name: string;
  snippet: string;
  description: string;
  code: string;
};

const copyToClipboard = (str: string) => {
  const snippet = str.replaceAll(/\t/g, '  ').replaceAll(/\n/g, '",\n"');
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText('"' + snippet + '"');
  return Promise.reject('The Clipboard API is not available.');
};

export const Card = ({
  language,
  name,
  snippet,
  description,
  code
}: TSnippet) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className='fixed inset-0 z-20 grid h-full place-items-center overflow-auto bg-bg bg-opacity-50'>
          <div
            onClick={e => e.stopPropagation()}
            className='w-[92%] max-w-[40rem] rounded-md border border-border bg-component p-4'>
            <div className='flex items-center justify-between'>
              <p className='text-card mb-2 font-medium text-white'>{name}</p>
              <button onClick={() => setShowModal(false)}>close</button>
            </div>
            <pre className='max-h-[50vh] w-full overflow-hidden overflow-y-auto whitespace-pre-wrap rounded-[0.25rem] border border-border bg-bg p-4 text-body leading-tight text-text'>
              <code>{code}</code>
            </pre>
            <button
              onClick={() => copyToClipboard(code)}
              className='mt-2'>
              copy
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setShowModal(!showModal)}
        className='group relative flex flex-col items-start rounded-[0.25rem] border border-border bg-component px-3 pb-5 text-left hover:border-text focus:border-text'>
        <span
          style={{ color: colors[language] }}
          className='inline-block -translate-y-1/2 rounded-sm border border-border bg-bg py-1.5 px-4 text-small font-medium uppercase tracking-wider group-hover:border-text group-focus:border-text'>
          {language}
        </span>
        <p className='text-card my-[0.125rem] font-bold text-white'>{name}</p>
        <p
          style={{ color: colors[language] }}
          className='text-small'>
          {snippet}
        </p>
        <p className='mt-4 text-body leading-snug text-text'>{description}</p>
      </button>
    </>
  );
};

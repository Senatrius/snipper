'use client';

import { useState } from 'react';
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
            <div className='mb-2 flex items-center justify-between'>
              <p className='text-card font-medium text-white'>{name}</p>
              <button
                className='text-[#858585] hover:text-white focus:text-white'
                onClick={() => setShowModal(false)}>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8 9.70342L2.03802 15.6654C1.81496 15.8885 1.53105 16 1.18631 16C0.841571 16 0.557667 15.8885 0.3346 15.6654C0.111533 15.4423 0 15.1584 0 14.8137C0 14.4689 0.111533 14.185 0.3346 13.962L6.29658 8L0.3346 2.03802C0.111533 1.81496 0 1.53105 0 1.18631C0 0.841571 0.111533 0.557667 0.3346 0.3346C0.557667 0.111533 0.841571 0 1.18631 0C1.53105 0 1.81496 0.111533 2.03802 0.3346L8 6.29658L13.962 0.3346C14.185 0.111533 14.4689 0 14.8137 0C15.1584 0 15.4423 0.111533 15.6654 0.3346C15.8885 0.557667 16 0.841571 16 1.18631C16 1.53105 15.8885 1.81496 15.6654 2.03802L9.70342 8L15.6654 13.962C15.8885 14.185 16 14.4689 16 14.8137C16 15.1584 15.8885 15.4423 15.6654 15.6654C15.4423 15.8885 15.1584 16 14.8137 16C14.4689 16 14.185 15.8885 13.962 15.6654L8 9.70342Z'
                    fill='currentColor'
                  />
                </svg>
              </button>
            </div>
            <pre className='max-h-[50vh] w-full overflow-hidden overflow-y-auto whitespace-pre-wrap rounded-[0.25rem] border border-border bg-bg p-4 text-body leading-tight text-text'>
              <code>{code}</code>
            </pre>
            <button
              onClick={() => copyToClipboard(code)}
              className='mt-2 flex items-center text-[#858585] hover:text-white focus:text-white'>
              <svg
                className='mr-2'
                width='18'
                height='20'
                viewBox='0 0 18 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M4 4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V15C18 15.2652 17.8946 15.5196 17.7071 15.7071C17.5196 15.8946 17.2652 16 17 16H14V19C14 19.552 13.55 20 12.993 20H1.007C0.875127 20.0008 0.744397 19.9755 0.622322 19.9256C0.500247 19.8757 0.389233 19.8022 0.295659 19.7093C0.202084 19.6164 0.127793 19.5059 0.0770543 19.3841C0.0263156 19.2624 0.000129374 19.1319 0 19L0.00300002 5C0.00300002 4.448 0.453 4 1.01 4H4ZM2.003 6L2 18H12V6H2.003ZM6 4H14V14H16V2H6V4Z'
                  fill='currentColor'
                />
              </svg>
              Copy the snippet
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

import React from 'react';

export const InputField = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mb-4 flex max-w-[20rem] flex-col text-white'>
      {children}
    </div>
  );
};

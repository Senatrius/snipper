'use client';

import { Button } from '@/components/form/Button';
import { InputField } from '@/components/form/InputField';
import Link from 'next/link';
import { useState } from 'react';

type TSignIn = {
  email: string;
  password: string;
};

export default function Login() {
  const [formValues, setFormValues] = useState<TSignIn>({
    email: 'g.makutenas@gmail.com',
    password: 'gedas9010'
  });

  const onHandleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <h1 className='mb-8 text-[2rem] font-bold text-white'>Log In</h1>
      <form>
        <InputField>
          <label
            className='mb-2'
            htmlFor='email'>
            Email
          </label>
          <input
            className='rounded-sm border border-border bg-bg py-2 px-4'
            type='email'
            name='email'
            id='email'
            value={formValues.email}
            onChange={onHandleChange}
          />
        </InputField>
        <InputField>
          <label
            className='mb-2'
            htmlFor='password'>
            Password
          </label>
          <input
            className='rounded-sm border border-border bg-bg py-2 px-4'
            type='password'
            name='password'
            id='password'
            value={formValues.password}
            onChange={onHandleChange}
          />
        </InputField>
        <Button text='Log In' />
      </form>
      <p>
        Dont have an account? <Link href='/signup'>Sign Up!</Link>
      </p>
    </>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { InputField } from '@/components/form/InputField';
import { Button } from '@/components/form/Button';

type TSignUp = {
  email: string;
  password: string;
};

export default function Signup() {
  const [formValues, setFormValues] = useState<TSignUp>({
    email: '',
    password: ''
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
      <h1 className='mb-8 text-[2rem] font-bold text-white'>Register</h1>
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
        <Button text='Sign Up' />
      </form>
      <p>
        Already have an account? <Link href='/login'>Sign In!</Link>
      </p>
    </>
  );
}

'use client'

import type { Session } from '@supabase/auth-helpers-nextjs';
import { createContext, useContext, useState } from 'react'
import { createClient } from '../utils/supabase-browser'

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../types'

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
  session: Session|null
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({ children, session }: { children: React.ReactNode; session: Session|null }) {
  const [supabase] = useState(() => createClient())

  return (
    <Context.Provider value={{ supabase, session }}>
      <>{children}</>
    </Context.Provider>
  )
}

export const useSupabase = () => {
  let context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  } else {
    return context;
  }
}
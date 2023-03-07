import 'server-only'

import SupabaseListener from '../components/SupabaseListener'
import SupabaseProvider from '../components/SupabaseProvider'
import { createClient } from '../utils/supabase-server'
import type { Database } from '../types';
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Sidebar } from '@/components/Sidebar';
import './globals.css';

export const revalidate = 0

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang='en'>
      <body className='flex'>
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token}/>
          <Sidebar />
          <main className='grow overflow-y-auto bg-bg px-12 py-8'>
            {children}
          </main>
        </SupabaseProvider>
      </body>
    </html>
  );
}

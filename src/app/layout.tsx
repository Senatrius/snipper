import { Sidebar } from '@/components/Sidebar';
import './globals.css';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex'>
        <Sidebar />
        <main className='grow overflow-y-auto bg-bg px-12 py-8'>
          {children}
        </main>
      </body>
    </html>
  );
}

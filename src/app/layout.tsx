import { Sidebar } from '@/components/Sidebar';
import './globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex'>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}

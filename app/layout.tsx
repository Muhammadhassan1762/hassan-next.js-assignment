import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}

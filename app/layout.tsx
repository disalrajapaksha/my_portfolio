import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Disal Ransika Rajapaksha | Portfolio',
  description: 'Portfolio of Disal Ransika Rajapaksha - BSc. (Hons) Industrial Information Technology student at Uva Wellassa University. Explore my projects, certificates, and get in touch.',
  keywords: ['Disal Ransika Rajapaksha', 'Portfolio', 'Industrial Information Technology', 'Uva Wellassa University', 'Web Developer', 'Software Engineer'],
  authors: [{ name: 'Disal Ransika Rajapaksha' }],
  openGraph: {
    title: 'Disal Ransika Rajapaksha | Portfolio',
    description: 'BSc. (Hons) Industrial Information Technology student at Uva Wellassa University',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

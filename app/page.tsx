'use client';

import Hero from '@/components/portfolio/Hero';
import Certificates from '@/components/portfolio/Certificates';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';
import Navbar from '@/components/portfolio/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <Hero />
      <Certificates />
      <Projects />
      <Contact />
    </main>
  );
}

import { Head } from '@inertiajs/react';
import { useEffect, ReactNode } from 'react';
import Navbar from '@/components/welcomePage/Navbar';
import Footer from '@/components/welcomePage/Footer';
import { initScrollAnimations } from '@/utils/animations';

interface TemplateProps {
  title: string;
  children: ReactNode;
}

export default function Template({ title, children }: TemplateProps) {
  useEffect(() => {
    // Initialize animations when component mounts
    initScrollAnimations();
  }, []);

  return (
    <>
      <Head title={`${title} | Seigler's Karate Center`}>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>

      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />

        {/* Page content */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}

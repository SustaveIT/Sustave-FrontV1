// app/page.tsx
"use client";

import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import TokenSection from '@/components/sections/TokenSection';
import PartnerSection from '@/components/sections/PartnerSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <TokenSection />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
}
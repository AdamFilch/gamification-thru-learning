import React from 'react';
import { SectionNav, TopBar } from '../navbar';
import { HomePage } from '../homepage';
import CurrentContent from '../homepage/content';
import { Footer } from '../footer';
import { MasterContent } from '../master';

export function LandingPage() {
  return (
    <div className="relative">
      <div className="sticky top-0">
        <TopBar />
      </div>
      <div>
        <HomePage />
      </div>
      <div id="topOfSection">
        <SectionNav />
        <MasterContent />
        {/* <CurrentContent /> */}
      </div>
      <div className="mt-[20px]">
        <Footer />
      </div>
    </div>
  );
}

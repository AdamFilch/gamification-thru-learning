import React from 'react';
import { Navbar } from '../navbar';
import { HomePage } from '../homepage';
import CurrentContent from '../homepage/content';
import { Footer } from '../footer';

export function LandingPage() {
  return (
    <div className="relative">
      <div className="sticky top-0">
        <Navbar />
      </div>
      <div>
        <HomePage />
      </div>
      <div>
        <CurrentContent />
      </div>
      <div className="pt-[60px]">
        <Footer />
      </div>
    </div>
  );
}

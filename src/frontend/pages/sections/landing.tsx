import React from 'react';
import { Navbar } from '../navbar';
import { HomePage } from '../homepage';
import CurrentContent from '../homepage/content';
import { Footer } from '../footer';

export function LandingPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <HomePage />
      </div>
      <div>{/* <CurrentContent /> */}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

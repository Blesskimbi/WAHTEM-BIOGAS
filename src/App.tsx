/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import CTASection from './components/CTASection';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-surface selection:bg-brand-lime selection:text-brand-forest">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Impact />
          <CTASection />
          <Testimonials />
          <Booking />
        </main>

        <Chatbot />
        <Footer />
      </div>
    </LanguageProvider>
  );
}


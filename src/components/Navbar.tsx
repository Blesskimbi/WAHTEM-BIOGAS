import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Leaf, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: { en: 'Home', fr: 'Accueil' }, href: '#home' },
    { name: { en: 'Services', fr: 'Services' }, href: '#services' },
    { name: { en: 'Projects', fr: 'Projets' }, href: '#portfolio' },
    { name: { en: 'About', fr: 'À Propos' }, href: '#about' },
    { name: { en: 'Contact', fr: 'Contact' }, href: '#booking' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 transition-all duration-500 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-8 py-3 bg-[#0A1A12]/80 backdrop-blur-xl rounded-full border border-[#1A3022] shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-brand-lime/10 rounded-lg">
            <Leaf className="text-brand-lime w-6 h-6" />
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-xl font-display font-bold uppercase tracking-wider text-white">
              Doni's Biofils
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-all relative group"
            >
              {t(item.name)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-lime transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-2 text-xs font-bold transition-colors text-white/80 hover:text-white bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'FR' : 'EN'}
          </button>
          <a href="#booking" className="px-6 py-2.5 bg-brand-lime text-brand-forest rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(113,212,74,0.4)]">
            {t({ en: 'Book Consultation', fr: 'Réserver' })}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass shadow-xl md:hidden overflow-hidden flex flex-col p-6 gap-6 border-t border-brand-forest/10"
          >
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-brand-forest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item.name)}
              </a>
            ))}
            <button 
              onClick={() => {
                setLanguage(language === 'en' ? 'fr' : 'en');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm font-bold"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'Switch to French' : 'Passer à l\'Anglais'}
            </button>
            <a href="#booking" className="btn-primary text-center" onClick={() => setIsMobileMenuOpen(false)}>
               {t({ en: 'Book Consultation', fr: 'Réserver' })}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

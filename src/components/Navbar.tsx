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
    { name: { en: 'Contact', fr: 'Contact' }, href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-6 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "px-6" : "px-6"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-8",
        isScrolled ? "glass shadow-2xl py-3 rounded-full border-white/10 bg-brand-forest/80" : "bg-transparent py-4 rounded-none"
      )}>
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-brand-lime/20 rounded-lg">
            <Leaf className="text-brand-lime w-6 h-6" />
          </div>
          <div className="flex flex-col -gap-1">
            <span className={cn("text-xl font-display font-bold uppercase tracking-wider", isScrolled ? "text-white" : "text-brand-forest")}>
              WAHTEM
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium hover:text-brand-lime transition-all relative group",
                isScrolled ? "text-white/80" : "text-brand-forest"
              )}
            >
              {t(item.name)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-lime transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className={cn(
              "flex items-center gap-2 text-xs font-bold transition-colors",
              isScrolled ? "text-white/80 hover:text-white" : "text-brand-forest"
            )}
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'FR' : 'EN'}
          </button>
          <a href="#booking" className="px-6 py-2.5 bg-brand-lime text-brand-forest rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-lime/20">
            {t({ en: 'Book Consultation', fr: 'Réserver' })}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="text-brand-forest" /> : <Menu className="text-brand-forest" />}
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

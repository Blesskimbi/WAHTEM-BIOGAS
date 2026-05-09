import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageSquare, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-deep text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Leaf className="text-brand-lime w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold uppercase tracking-wider">Doni's Biofils</span>
                <span className="text-[8px] font-medium uppercase tracking-[0.2em] opacity-70">Biofils & Biogas</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {t({ 
                en: 'Pioneering waste-to-energy and biotechnological solutions for a sustainable and innovative Africa.', 
                fr: 'Pionnier dans les solutions de transformation des déchets en énergie et biotechnologiques pour une Afrique durable.' 
              })}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/people/Donis-Biofil/61573592046536/" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-lime hover:text-brand-forest transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/wahtem10/" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-lime hover:text-brand-forest transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-lime hover:text-brand-forest transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-lime">Services</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Biodigester Installation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Biogas Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Epoxy Flooring</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Waste Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Engineering Consultancy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-lime">Company</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Latest News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-lime">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-lime flex-shrink-0 mt-1" />
                <span>up station, Bamenda, Cameroon</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-lime" />
                <span>+237 6 73 01 86 29</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-lime" />
                <span>fwahtem@gmail.com</span>
              </li>
              <li className="pt-4">
                <a href="https://wa.me/237673018629" className="flex items-center gap-2 text-brand-lime font-bold">
                  <MessageSquare className="w-4 h-4" />
                   {t({ en: 'Chat on WhatsApp', fr: 'Discuter sur WhatsApp' })}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/40">
            © 2026 Doni's Biofils. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/40 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-lime hover:text-brand-forest transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

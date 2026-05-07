import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Building2, ArrowRight } from 'lucide-react';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative bg-brand-forest rounded-[2.5rem] p-10 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lime/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <div className="w-16 h-16 bg-brand-lime/20 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0">
               <Building2 className="text-brand-lime w-8 h-8" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-[1.1]">
              {t({ en: 'Ready to make the switch to renewable energy?', fr: 'Prêt à passer à l\'énergie renouvelable ?' })}
            </h2>
            
            <p className="text-lg text-white/60">
              {t({ 
                en: 'Let our engineers design a system tailored to your home, farm, hotel or factory.', 
                fr: 'Laissez nos ingénieurs concevoir un système adapté à votre maison, ferme, hôtel ou usine.' 
              })}
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <a href="#booking" className="inline-flex items-center gap-3 px-10 py-5 bg-brand-lime text-brand-forest rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-brand-forest/40">
              {t({ en: 'Get a free quote', fr: 'Obtenir un devis gratuit' })}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

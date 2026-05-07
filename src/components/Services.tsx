import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-brand-forest font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                {t({ en: 'Advanced Engineering', fr: 'Ingénierie Avancée' })}
              </span>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-deep tracking-tight">
                {t({ en: 'Bio-Tech Solutions for Modern Africa', fr: 'Solutions Bio-Tech pour l\'Afrique Moderne' })}
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-lg border-l-2 border-brand-lime pl-6">
              {t({ 
                en: 'Delivering world-class waste-to-energy infrastructure and premium architectural flooring.', 
                fr: 'Infrastructure de transformation des déchets en énergie de classe mondiale.' 
              })}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1px bg-slate-100 border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
          {SERVICES.map((service, index) => {
            const Icon = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-12 hover:bg-brand-forest transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brand-lime/10 text-brand-forest rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-lime group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                    {t(service.title)}
                  </h3>
                  <p className="text-slate-500 group-hover:text-white/60 transition-colors mb-8 leading-relaxed">
                    {t(service.description)}
                  </p>
                  <div className="flex items-center gap-2 text-brand-forest group-hover:text-brand-lime font-bold text-xs uppercase tracking-widest">
                    <span>{t({ en: 'View Technical Specs', fr: 'Spécifications Techniques' })}</span>
                    <Icons.ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
                
                {/* Background Number Overlay */}
                <span className="absolute top-8 right-8 text-8xl font-display font-bold text-slate-50 opacity-[0.03] group-hover:opacity-[0.05] group-hover:text-white transition-all">
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

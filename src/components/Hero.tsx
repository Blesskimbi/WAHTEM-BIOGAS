import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Leaf, Zap, Wrench, ShieldCheck, Sun } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Hero() {
  const { t } = useLanguage();

  const bottomStats = [
    { label: { en: 'Projects Delivered', fr: 'Projets Livrés' }, value: '120+' },
    { label: { en: 'Happy Clients', fr: 'Clients Satisfaits' }, value: '80+' },
    { label: { en: 'Energy Systems Installed', fr: 'Systèmes Énergétiques Installés' }, value: '45+' },
    { label: { en: 'Waste Recycled', fr: 'Déchets Recyclés' }, value: '10,000 m³' },
  ];

  return (
    <section id="home" className="relative min-h-[110vh] flex flex-col justify-center pt-20 overflow-hidden bg-brand-forest text-white">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/input_file_0.png" 
          alt="Bio-Tech Engineering Site"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-forest/60 via-brand-forest/80 to-brand-forest z-10" />
        <div className="absolute inset-0 bg-grid z-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime/20 blur-[150px] -z-10 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-30 pt-20 flex-1 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-wider mb-10">
            <Zap className="w-3 h-3 text-brand-lime" />
            {t({ en: "Cameroon's Green Engineering Pioneer", fr: "Pionnier de l'ingénierie verte au Cameroun" })}
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] mb-8 tracking-tighter">
            {t({ en: 'Turning Waste', fr: 'Transformer' })} <br />
            {t({ en: 'Into', fr: 'En' })} <span className="text-brand-lime">{t({ en: 'Energy', fr: 'Énergie' })}</span> & <br />
            {t({ en: 'a Greener Future', fr: 'un Avenir Vert' })}
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t({ 
              en: 'We design and install biodigesters, biogas systems, epoxy flooring and waste-to-energy solutions — engineered for Africa, built to last.', 
              fr: 'Nous concevons et installons des biodigesteurs, des systèmes de biogaz, des sols en époxy et des solutions de valorisation énergétique des déchets.' 
            })}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 mb-16">
            <a href="#booking" className="px-10 py-5 bg-brand-lime text-brand-forest rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-brand-lime/30 flex items-center gap-3">
              {t({ en: 'Book Consultation', fr: 'Réserver Consultation' })}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#portfolio" className="px-10 py-5 border border-white/20 bg-white/5 rounded-full font-bold transition-all hover:bg-white/10 flex items-center gap-3">
              {t({ en: 'View Projects', fr: 'Voir Projets' })}
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
            {[
              { icon: Leaf, label: 'Eco-Friendly' },
              { icon: Zap, label: 'Renewable Energy' },
              { icon: Wrench, label: 'Sustainable Engineering' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5">
                <item.icon className="w-3.5 h-3.5 text-brand-lime" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats Container */}
      <div className="max-w-7xl mx-auto px-6 w-full pb-12 relative z-30">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-sm"
        >
          {bottomStats.map((stat, i) => (
            <div key={i} className={cn(
              "p-8 lg:p-12 text-center flex flex-col items-center justify-center gap-1",
              i !== 3 && "border-r border-white/10"
            )}>
              <span className="text-4xl md:text-5xl font-display font-bold leading-none">{stat.value}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">{t(stat.label)}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

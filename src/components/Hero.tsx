import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Leaf, Zap, Wrench } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Hero() {
  const { t } = useLanguage();

  const bottomStats = [
    { label: { en: 'Projects Delivered', fr: 'Projets Livres' }, value: '120+' },
    { label: { en: 'Happy Clients', fr: 'Clients Satisfaits' }, value: '80+' },
    { label: { en: 'Energy Systems Installed', fr: 'Systemes Energetiques Installes' }, value: '45+' },
    { label: { en: 'Waste Recycled', fr: 'Dechets Recycles' }, value: '10,000 m3' },
  ];

  const valueProps = [
    t({ en: 'Local team with hands-on deployment experience', fr: 'Equipe locale avec experience terrain' }),
    t({ en: 'End-to-end design, installation and maintenance', fr: 'Conception, installation et maintenance complete' }),
    t({ en: 'Long-life systems with measurable sustainability impact', fr: 'Systemes durables avec impact mesurable' }),
  ];

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-brand-deep text-white pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="absolute inset-0 z-0 bg-[#0A1A12]">
        <img
          src="/images/biofil-4.jpg"
          alt="Doni's Biofils Project Site"
          className="w-full h-full object-cover opacity-70"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/60 via-transparent to-brand-deep/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/70 via-brand-deep/20 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-brand-lime/15 blur-[150px] rounded-full z-10 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute inset-0 bg-grid opacity-10 z-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-30 pt-12 pb-16 lg:pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto lg:mx-0 lg:mt-10"
        >
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-white/70 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              {t({ en: "Cameroon's Green Engineering Pioneer", fr: "Pionnier de l'ingenierie verte au Cameroun" })}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[1.1] mb-6 tracking-tight max-w-3xl text-white">
              {t({ en: 'Turning Waste', fr: 'Transformer Les Déchets' })} <br />
              {t({ en: 'Into', fr: 'En' })} <span className="text-brand-lime">{t({ en: 'Energy', fr: 'Énergie' })}</span> & <br />
              {t({ en: 'a Greener Future', fr: 'un Avenir Vert' })}
            </h1>

            <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
              {t({
                en: 'We design and install biodigesters, biogas systems, epoxy flooring and waste-to-energy solutions - engineered for Africa, built to last.',
                fr: 'Nous concevons et installons des biodigesteurs, des systemes de biogaz, des sols en epoxy et des solutions de valorisation energetique des dechets.',
              })}
            </p>

            <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-3 mb-10 w-full">
              <a href="#booking" className="flex-1 min-w-[140px] px-4 py-3 sm:px-8 sm:py-4 bg-brand-lime text-brand-forest rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(113,212,74,0.5)] flex items-center justify-center gap-2 text-xs sm:text-base">
                {t({ en: 'Book Consultation', fr: 'Reserver' })}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </a>
              <a href="#portfolio" className="flex-1 min-w-[140px] px-4 py-3 sm:px-8 sm:py-4 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full font-semibold transition-all hover:bg-white/10 flex items-center justify-center gap-2 text-xs sm:text-base">
                {t({ en: 'View Projects', fr: 'Projets' })}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 opacity-90">
              {[
                { icon: Leaf, label: t({ en: 'Eco-Friendly', fr: 'Eco-Responsable' }) },
                { icon: Zap, label: t({ en: 'Renewable Energy', fr: 'Energie Renouvelable' }) },
                { icon: Wrench, label: t({ en: 'Sustainable Engineering', fr: 'Ingenierie Durable' }) },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-white/15 rounded-full bg-white/10">
                  <item.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-lime" />
                  <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 border border-[#1A3022] rounded-[1.5rem] overflow-hidden bg-[#1A3022] gap-px shadow-2xl"
        >
          {bottomStats.map((stat, i) => (
            <div
              key={i}
              className="p-6 lg:p-8 text-center flex flex-col items-center justify-center gap-2 bg-[#0A1A12]"
            >
              <span className="text-2xl md:text-5xl font-display font-bold leading-none text-white">{stat.value}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/65">{t(stat.label)}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

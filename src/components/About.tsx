import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { STATS } from '../constants';
import { CheckCircle2, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const points = [
    { en: 'Expertise in Biotech Engineering', fr: 'Expertise en Ingénierie Biotechnologique' },
    { en: 'Industrial-Grade Epoxy Systems', fr: 'Systèmes Époxy Industriels' },
    { en: 'Custom Waste-to-Energy Design', fr: 'Conception de Valorisation des Déchets' },
    { en: 'On-Site Technical Supervision', fr: 'Supervision Technique sur Site' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Construction Photo */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 aspect-[4/5]">
                <img 
                  src="/images/biofil-1.jpg" 
                  alt="Professional Biofil Installation" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 to-transparent" />
            </div>

            {/* Inset worker photo */}
            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-4 -right-4 w-40 h-40 md:-bottom-10 md:-right-10 md:w-64 md:h-64 rounded-2xl md:rounded-[2.5rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl z-20"
            >
                <img 
                  src="/images/biofil-2.jpg" 
                  alt="Team in action" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
            </motion.div>

            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-lime/10 blur-[120px] rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-forest font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              {t({ en: 'Rooted in Africa, Built for the World', fr: 'Ancré en Afrique, Conçu pour le Monde' })}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-deep mb-6 md:mb-8 tracking-tighter leading-[1.05] md:leading-[0.95]">
              {t({ 
                en: 'Engineering Excellence at Every Depth', 
                fr: 'Excellence en Ingénierie à Chaque Profondeur' 
              })}
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed">
              {t({ 
                en: "Doni's Biofils is more than a service provider; we are your partners in ecological transition. From our base at Up Station, Bamenda to projects across Cameroon, our engineers are on the ground, ensuring every biodigester meets the highest professional standards.", 
                fr: "Doni's Biofils est plus qu'un prestataire de services ; nous sommes vos partenaires dans la transition écologique. De notre base à Up Station, Bamenda aux projets à travers le Cameroun, nos ingénieurs sont sur le terrain." 
              })}
            </p>

            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12 mb-12">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center text-brand-forest">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-slate-800">{t(point)}</span>
                </div>
              ))}
            </div>

            <div className="p-6 md:p-8 bg-brand-forest rounded-2xl md:rounded-[2.5rem] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-brand-forest/20">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-forest bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="Expert" />
                    </div>
                 ))}
               </div>
               <div className="text-center sm:text-right">
                  <p className="text-xl md:text-2xl font-display font-bold text-brand-lime">100% Safety</p>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-60">Professional Compliance</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
